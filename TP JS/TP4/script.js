let id = document.getElementById("id");
let nom = document.getElementById("nom");
let groupe = document.getElementById("groupe");
let note = document.getElementById("note");
let vdata = document.querySelector(".custom-table");

let stagiaires = [];
let selectedIndex = null;

document.getElementById("ajouter").addEventListener("click", ajouter);
document.getElementById("save").addEventListener("click", handleAfficher);

vdata.addEventListener("click", (e) => {
    let row = e.target.closest("tr");

    if (row && row.classList.contains("trb")) {
        selectedIndex = row.dataset.index;

        document.querySelectorAll(".trb").forEach(r => {
            r.style.color = "";
            r.style.background = "";
        });

        row.style.color = "green";
        row.style.background = "black";

        // remplir formulaire
        let st = stagiaires[selectedIndex];

        id.value = st.id;
        nom.value = st.nom;
        groupe.value = st.groupe;
        note.value = st.note;

        // radio filiere
        document.querySelectorAll("input[name='filiere']").forEach(r => {
            r.checked = (r.value === st.filiere);
        });

        // radio matiere
        document.querySelectorAll("input[name='matiere']").forEach(r => {
            r.checked = (r.value === st.module);
        });
    }
});

function ajouter(e){
    e.preventDefault();
    let valid = validation();
    if(valid == true){
        let filiere = document.querySelector("input[name='filiere']:checked");
        let matiere = document.querySelector("input[name='matiere']:checked");

        let stagiaire = {
            id : id.value ,
            nom : nom.value ,
            groupe : groupe.value ,
            filiere : filiere ? filiere.value : "",
            module : matiere ? matiere.value : "", // ✔️ صلحنا الاسم
            note : note.value
        }

        stagiaires.push(stagiaire);
        console.log(stagiaire);
    }
    
}

function handleAfficher(event){
    event.preventDefault();
    afficher();
    maximum();
    console.log(stagiaires[0].note)
}

function afficher(){
    let data = document.getElementById("tdata");
    data.innerHTML = "";

    stagiaires.forEach((st , index)=> {
        let decision = "";
        let redoublant_class ="";

        if (stagiaires[index].note >= 14){
            decision = " Admis (Bien)"
            redoublant_class = "admis-bien"
        }else if (stagiaires[index].note > 10 && stagiaires[i].note < 14){
            decision = " Admis"
        }else if (stagiaires[index].note < 10){
            decision = "Redoublant"
            redoublant_class = "redoublant"
        }
        data.innerHTML += ` 
        <tr class="trb" data-index="${index}">
            <th>${st.id}</th>
            <td>${st.nom}</td>
            <td class="note">${st.note}</td>
            <td>${st.filiere}</td>
            <td>${st.groupe}</td>
            <td>${st.module}</td>
            <td>${decision}</td>
            <td>
                <button class="btn-supprimer" onclick="supprimer(event)">Supprimer</button>
                <button class="btn-modifier" onclick="modifier(event)">modifier</button>
            </td>
        </tr>`;
    });
}

function supprimer(event){
    event.preventDefault();

    let row = event.target.closest("tr");
    let index = row.dataset.index;

    stagiaires.splice(index,1);
    afficher();

    console.log("supprimer ok");
}

function modifier(event){
    event.preventDefault();

    if (selectedIndex === null){
        alert("choise the row")
    }else{
        let filiere = document.querySelector("input[name='filiere']:checked");
        let matiere = document.querySelector("input[name='matiere']:checked");

        stagiaires[selectedIndex].id = id.value;
        stagiaires[selectedIndex].nom = nom.value;
        stagiaires[selectedIndex].groupe = groupe.value;
        stagiaires[selectedIndex].filiere = filiere ? filiere.value : "";
        stagiaires[selectedIndex].module = matiere ? matiere.value : "";
        stagiaires[selectedIndex].note = note.value;

        afficher();

        console.log("modifier ok");
    }

    
}

function maximum(){
    let max = parseFloat(stagiaires[0].note);
    for(let i=0;i<stagiaires.length;i++){
        if(parseFloat(stagiaires[i].note) > max){
            max = parseFloat(stagiaires[i].note)
            
        }
    }
    let bestn = document.getElementById("best-note");
    bestn.innerHTML =`<span>${max}</span>`
            console.log("okkkkkkkk")
    
}

function validation(){
    let valid = true;
    if(id.value.trim() === ""){
        document.getElementById("id-error").textContent = "Le champ ID est obligatoire !"
        valid = false
    }else{
        document.getElementById("id-error").textContent = ""
    }

    if(nom.value.trim() === ""){
        document.getElementById("nom-error").textContent = "Le champ NOM est obligatoire !"
        valid = false
    }else{
        document.getElementById("nom-error").textContent = ""
    }

    if(note.value.trim() ===""){
        document.getElementById("note-error").textContent = "Le champ NOTE est obligatoire !"
        valid = false
    }else{
        document.getElementById("note-error").textContent = ""
    }

    return valid
}