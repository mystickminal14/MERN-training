let title=document.getElementById("title")
console.log(title.textContent='kknkn')


let praa=document.getElementsByClassName("para")
console.log(praa)

let liTag= document.getElementsByTagName('li')
console.log(liTag.length)

let query=document.querySelector('.queery')
console.log(query.innerHTML=`<h1>Kyrie is the best </h1>`)
 
let input=document.getElementById('i')
if (input.hasAttribute('type')){
// console.log(input.type
// console.log(input.value='huonter')
console.log(input.getAttribute(value))
console.log(input.setAttribute(value,'minal'))
console.log(input.getAttribute(value))}
else{
    console.log(error)
}
const cr = document.createElement('div');
cr.innerHTML = '<h1>This is greatest of all tun</h1>';
let h=document.body
h.appendChild(cr);