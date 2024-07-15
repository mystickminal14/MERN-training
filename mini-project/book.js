const bookTitle = document.getElementById('title');

function addBook() {
    const title = bookTitle.value;
    if (title) {
        const ul = document.getElementById("book-list");
        const li = document.createElement("li");
        li.textContent = title;
        li.addEventListener("click", toggleFavorite);
        ul.appendChild(li);
        bookTitle.value = '';
    }
}

function searchBook() {
    const searchTerm = document.getElementById("title").value.toLowerCase();
    const ul = document.getElementById("book-list");
    const liElements = ul.getElementsByTagName("li");

    for (let li of liElements) {
        if (li.textContent.toLowerCase().includes(searchTerm)) {
            li.style.backgroundColor = "yellow";
        } else {
            li.style.backgroundColor = "";
        }
    }
}

function removeBook() {
    const ul = document.getElementById("book-list");
    const liElements = ul.getElementsByTagName("li");

    if (liElements.length > 0) {
        const lastLi = liElements[liElements.length - 1];
        const confirmation = confirm(`Are you sure you want to remove the book: ${lastLi.textContent}?`);
        if (confirmation) {
            ul.removeChild(lastLi);
        }
    } else {
        alert("No books to remove.");
    }
}

function toggleFavorite(event) {
    const li = event.target;
    li.classList.toggle("favorite");
}

function clearSearchHighlights() {
    const ul = document.getElementById("book-list");
    const liElements = ul.getElementsByTagName("li");
bookTitle.value='';
    for (let li of liElements) {
        li.style.backgroundColor = "";
    }
}

document.querySelectorAll("#book-list li").forEach(li => {
    li.addEventListener("click", toggleFavorite);
});