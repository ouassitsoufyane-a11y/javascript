let text = document.getElementById("inputField");
let btn = document.getElementById("addBtn");
let span = document.getElementById("ktb");
let ul = document.getElementById("list");
let list = []


ul.addEventListener("click",function(e){
     let row = e.target;
     if(row && row.classList.contains("lii")){
        row.style.color = "green";
        row.style.background = "black";
        index = row.dataset.index;
        text.value = list[index];
     }
     
     
})

function ajouter(){
    if(text.value != ""){
        list.push(text.value);
    }
    else{
        span.style.display = "block"
    }
    afficher()
    

    
}


function afficher(){
    ul.innerHTML = ``
    list.forEach((li , index) => {
        ul.innerHTML += `<li class= "lii" data-index = "${index}"> ${li} 
                                                                        <button id="supBtn" onclick="supprimer()">supprimer</button>
                                                                        <button id="modBtn" onclick="modifier()">modifier</button>
                                                                                                                                         </li>`
    });
}

function supprimer(){
    list.splice(index , 1);
    afficher();
}

function modifier(){
    list[index] = text.value;
    afficher();
}