let btnAjouter = document.querySelector("#btn_ajouter");
let btnSupprimer = document.querySelector("#btn_supprimer");
let btnModifier = document.querySelector("#btn_modifier");
let btnModule = document.querySelector("#btn_ajouterModule");

let oid = document.getElementById("txtid") ;
let onom = document.getElementById("txtnom");
let oprenom = document.getElementById("txtprenom") ;
let oage = document.getElementById("txtage") ;
let selectindex = null;

let listStagiaier = [];



btnAjouter.addEventListener("click",ajouter);
btnSupprimer.addEventListener("click",supprimer);
btnModifier.addEventListener("click",modifier);
// btnModule.addEventListener("click",ajouterModule);

function ajouter(e){
    e.preventDefault();

    for(let st of listStagiaier){
        if(oid.value == st.id){
            alert("deja kyn");
            return;
        }
    }

    const stagiaier = {
        id : oid.value,
        nom : onom.value,
        prenom : oprenom.value,
        age : oage.value 
    };

    listStagiaier.push(stagiaier);
    afficher();
}


document.getElementById("bodytable").addEventListener("click",(e)=>{
    console.log("clicked");

    let row = e.target.closest("tr");
    console.log("row:", row);

    if(row && row.classList.contains("tttt")){
        console.log("row valid");

        document.querySelectorAll("#bodytable tr").forEach(tr=>{
            tr.style.backgroundColor = "";
        })

        row.style.backgroundColor = "#f51313";

        selectindex = parseInt(row.dataset.index);
        console.log("index:", selectindex);

        console.log(listStagiaier);

        oid.value = listStagiaier[selectindex].id;
    }
});


function afficher(){
    document.getElementById("bodytable").innerHTML = "" ;
    listStagiaier.forEach((st,index)=>{
        document.getElementById("bodytable").innerHTML += `<tr class="tttt" data-index="${index}">
                                                                <td>${st.id}</td>
                                                                <td>${st.nom}</td>
                                                                <td>${st.prenom}</td>
                                                                <td>${st.age}</td>
                                                                <td>
                                                                    <div class="module-box">
                                                                    </div>
                                                                </td>
                                                          </tr>` ;
    })
};



function supprimer(e){
    e.preventDefault();
    if(selectindex === null){
        alert("5tar line")
        return
    }else{
        listStagiaier.splice(selectindex,1);
        
        afficher();
        selectindex = null ;
    }
   

}

function modifier(e){
    e.preventDefault();

    if(selectindex === null){
        alert("5tar line")
        return
    }else{
        listStagiaier[selectindex].id = oid.value;
        listStagiaier[selectindex].nom = onom.value;
        listStagiaier[selectindex].prenom = oprenom.value;
        listStagiaier[selectindex].age = oage.value;

        afficher(); 
        selectindex = null ;

    }
    

}