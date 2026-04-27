//let titre = document.getElementById("titre");  // this is call the element by id 
let titre = document.querySelector("#titre")
//let titreoo = document.getElementsByClassName("titreoo"); // this is for call the element by class
let titreoo = document.querySelector(".titreoo")
//let prag = document.getElementsByTagName("p");// this is for call the element by name tag 
let prag = document.querySelector("p")
let ppp = document.querySelector("#ppp")

let container = document.querySelector(".container")

console.log(titre.nextElementSibling)
console.log(titreoo.firstChild)
console.log(prag.ELEMENT_NODE)
console.log(ppp.parentNode)
console.log(container.firstElementChild)
console.log(container.lastElementChild)
console.log(container.children)


for (let i = 0 ; i < container.children.length; i++){
    console.log(container.children[i].nodeName + " -- " + container.children[i].textContent);
}

titre.innerText = "dd102"
titre.style.color = "red"

