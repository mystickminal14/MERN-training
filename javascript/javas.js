let userChoice = "";
let ulclass = document.getElementsByClassName("lists")[0];
let searched = document.getElementsByClassName("searched")[0];
let btn = document.getElementById("action");
let searchField = document.getElementById("jj");
let searchbtn = document.getElementById("sbtn");
let bluebery = [];

btn.addEventListener("click", () => {
    userChoice = window.prompt("Enter choice of book?");
    addBook();
});

searchbtn.addEventListener("click", () => {
    searchBook();
});

const addBook = () => {
    bluebery.push(userChoice);
    console.log(bluebery);
    ulclass.innerHTML += `<li>${userChoice}</li>`;
    let high=document.createElement('button')
    high.textContent='Add To faviourite'
    high.addEventListener('click', () => {
       ulclass.style.background='red'
    });
    ulclass.appendChild(high)
};

const searchBook = () => {
    let bb = bluebery.filter((val) => {
        return val === searchField.value;
    });

    searched.innerHTML = '';  
    bb.forEach(book => {
        let li = document.createElement('li');
        li.className = 'nn';
        li.textContent = book;
        let remBtn = document.createElement('button');
        remBtn.textContent = 'Remove';
        remBtn.addEventListener('click', () => {
            li.remove();
            remBtn.remove();
        });

        searched.appendChild(li);
        searched.appendChild(remBtn);
    });
};