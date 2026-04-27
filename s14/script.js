let btn_ajouter = document.getElementById("btn_ajouter")
let oid = document.getElementById("txtid")
let onom = document.getElementById("txtnom")
let oprenom = document.getElementById("txtprenom")
let oage = document.getElementById("txtage")
let listaStagiaier = []
let bodytable = document.getElementById("bodytable")
let btn_supprimer =document.getElementById("btn_supprimer")
let clickable_row = document.getElementsByClassName("clickable_row")
let forma = document.getElementById("forma")


btn_ajouter.addEventListener("click",ajouter)
btn_supprimer.addEventListener("click",supprimer)

bodytable.addEventListener("click", function(e) {
    let row = e.target.closest("tr");
    if (row && row.classList.contains("clickable_row")) {
        index = row.dataset.index; 
        selectRow = row
        oid.value = listaStagiaier[index].id
        onom.value = listaStagiaier[index].nom
        oprenom.value = listaStagiaier[index].prenom
        oage.value = listaStagiaier[index].age
        row.style.backgroundColor = "#cecece";
    }
    console.log(listaStagiaier[index].id)
});

function ajouter(e){
    e.preventDefault();
    let stagiaires = {
        id : oid.value,
        nom : onom.value,
        prenom : oprenom.value,
        age : oage.value ,
        module : []
    };

    listaStagiaier.push(stagiaires);
    renderTable();


}



function supprimer(e){
    e.preventDefault();

    listaStagiaier.splice(index , 1);
    renderTable();

    console.log(selectRow);
}

function modifier(event){
    event.preventDefault();

    listaStagiaier.forEach(st => {
        console.log(listaStagiaier[index])
        if(st.id == listaStagiaier[index].id){
             listaStagiaier[index].id = oid.value
            listaStagiaier[index].nom = onom.value
             listaStagiaier[index].prenom = oprenom.value
            listaStagiaier[index].age = oage.value
            renderTable();
        }
        
        
    })
}

function ajouterModule(event){
    event.preventDefault();

    if(index === null){
      console.log("اختار صف أولاً!");
    return;
}
    forma.innerHTML += `<div class="module-box">
                            <strong>module :</strong><input type="text" id="moduleNom" name="moduleNom" placeholder="Entrer le nom de module" />
                            | CC1: <input type="number" id="cc1" name="cc1" placeholder="Entrer la note" /> 
                            | CC2: <input type="number" id="cc2" name="cc2" placeholder="Entrer la note" /> 
                            | CC3: <input type="number" id="cc3" name="cc3" placeholder="Entrer la note" />
                            | EFM: <input type="number" id="efm" name="efm" placeholder="Entrer la note" /> 
                             <button type="submit" id="btn_ajouterNote" class="btn btn-primary " style="margin-top : 8px ;" onclick="ajouterNote(event)">Ajouter note</button>
                        </div>`
    console.log("okk")
    
}

function ajouterNote(event){
    event.preventDefault();
    let nom = document.getElementById("moduleNom").value
    let cc1 = document.getElementById("cc1").value
    let cc2 = document.getElementById("cc2").value
    let cc3 = document.getElementById("cc3").value
    let efm = document.getElementById("efm").value
    let moduletable = document.querySelector(`.module-box${index}`)

    let moduleA = {
        nomM : nom , 
        cc1 : cc1 , 
        cc2 : cc2 ,
        cc3 : cc3 ,
        efm : efm 
    }

    listaStagiaier[index].module.push(moduleA)
    
    renderTable();
    }
    



function renderTable() {
    bodytable.innerHTML = "";

    listaStagiaier.forEach((s, index) => {

        let modulesHTML = "";

        s.module.forEach(m => {
            modulesHTML += `
            <div class="module-box">
                <strong>${m.nomM}</strong><br>
                CC1: ${m.cc1} | CC2: ${m.cc2} | CC3: ${m.cc3} | EFM: ${m.efm}
            </div>`;
        });

        bodytable.innerHTML += `
        <tr class="clickable_row" data-index="${index}">
            <td>${s.id}</td>
            <td>${s.nom}</td>
            <td>${s.prenom}</td>
            <td>${s.age}</td>
            <td>${modulesHTML}</td>
        </tr>`;
    });
}

