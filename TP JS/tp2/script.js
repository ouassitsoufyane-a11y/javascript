

let btnAjouter = document.querySelector("#btn_ajouter");
let btnSupprimer = document.querySelector("#btn_supprimer");
let btnModifier = document.querySelector("#btn_modifier");
let btnModule = document.querySelector("#btn_ajouterModule");

let listStagiaier = [];



btnAjouter.addEventListener("click",ajouter);
btnSupprimer.addEventListener("click",supprimer);
btnModifier.addEventListener("click",modifier);
btnModule.addEventListener("click",ajouterModule);


document.getElementById("bodytable").addEventListener("click", function(e){
    
    let row = e.target.closest("tr");
    if (row && row.classList.contains("clicktable")){
        indextable = row.dataset.index;
        row.style.backgroundColor = "#cecece";

        let oid = document.getElementById("txtid") ;
        let onom = document.getElementById("txtnom") ;
        let oprenom = document.getElementById("txtprenom") ;
        let oage = document.getElementById("txtage") ;

        oid.value = listStagiaier[indextable].id
        onom.value = listStagiaier[indextable].nom
        oprenom.value = listStagiaier[indextable].prenom
        oage.value = listStagiaier[indextable].age
        console.log(listStagiaier);
    }

    
});

function ajouter(e){
    e.preventDefault();

    let oid = document.getElementById("txtid").value ;
    let onom = document.getElementById("txtnom").value ;
    let oprenom = document.getElementById("txtprenom").value ;
    let oage = document.getElementById("txtage").value ;

    stagiaier = {
        id : oid,
        nom : onom,
        prenom : oprenom,
        age : oage,
        module : []
    }

    listStagiaier.push(stagiaier);
    afficher();
}

function supprimer(e){
    e.preventDefault();

    listStagiaier.splice(indextable,1);
    afficher();
    console.log(listStagiaier[indextable].id)
}

function modifier(e){
    e.preventDefault();

    let oid = document.getElementById("txtid") ;
    let onom = document.getElementById("txtnom") ;
    let oprenom = document.getElementById("txtprenom") ;
    let oage = document.getElementById("txtage") ;


    listStagiaier[indextable].id = oid.value 
    listStagiaier[indextable].nom = onom.value
    listStagiaier[indextable].prenom = oprenom.value
    listStagiaier[indextable].age = oage.value  

    console.log("okkk modifier")
    afficher()
}

function ajouterModule(e){
    e.preventDefault();

    console.log("okkk module")
}

function ajouterModule(e){
    e.preventDefault();
    document.getElementById("Formulaire_module").style.display = "block"

}

function ajouterNote(event){
    event.preventDefault();
    let mid = document.getElementById("mid") ;
    let sltmodule = document.getElementById("sltmodule") ;
    let txtcc1 = document.getElementById("txtcc1") ;
    let txtcc2 = document.getElementById("txtcc2") ;
    let txtcc3 = document.getElementById("txtcc3") ;
    let txtefm = document.getElementById("txtefm") ;

    // if(!txtcc1){
    //     document.getElementsByClassName("error1").style.display = "block"
    // }
    // if(!txtcc2){
    //     document.getElementsByClassName("error2").style.display = "block"
    // }
    // if(!txtcc3){
    //     document.getElementsByClassName("error3").style.display = "block"
    // }
    // if(!txtefm){
    //     document.getElementsByClassName("error4").style.display = "block"
    // }

    let modules = {
            id : mid.value,
            nom : sltmodule.value,
            cc1 : txtcc1.value,
            cc2 : txtcc2.value,
            cc3 : txtcc3.value,
            efm : txtefm.value
    }

    listStagiaier[indextable].module.push(modules)
    console.log("okkkkk")
}

function afficher(){
    document.getElementById("bodytable").innerHTML = ``;
    listStagiaier.forEach((st,index) => {
        document.getElementById("bodytable").innerHTML += `<tr class="clicktable" data-index="${index}">
                                                            <td>${st.id}</td>
                                                            <td>${st.nom}</td>
                                                            <td>${st.prenom}</td>
                                                            <td>${st.age}</td>
                                                            <td>${st.module}</td>
                                                           </tr>`
    })
    
}