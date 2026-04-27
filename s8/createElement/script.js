const parent = document.querySelector(".section-1")
document.querySelector(".addtitle").addEventListener("click",()=> {
    const title = document.createElement("h1");
    title.innerText = "dd102 - js" ;
    title.style.color = "red";
    title.style.textAlign = "center";
    parent.append(title);
})

document.querySelector(".btn-delete").addEventListener("click",()=>{
    const h1Delet = document.querySelector(".h1-delete").remove();
    })

document.querySelector(".btn-remplacer").addEventListener("click",()=>{
    const parent = document.querySelector(".section-1");
    const anc = document.querySelector(".paragraph-1");
    const vtitre = document.querySelector("h1")
    vtitre.innerText = "this is an exmaple";
    parent.removeChild(vtitre,anc)
})

document.querySelector(".btn-creer-conteneur").addEventListener("click", ()=> {
    const vContainer = document.createElement("div");
    vContainer.classList.add("container");
    document.body.append(vContainer)
    const vsection = document.querySelector(".section-1")
    vsection.setAttribute("title", "this is a section")
    vContainer.style.width = "100px"
    vContainer.style.height ="100px"
    vContainer.style.backgroundColor = "red"
})