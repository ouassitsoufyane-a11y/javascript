let tv = document.getElementById("tv");
let qnt = document.getElementById("qnt");
let jsonvalue = null ;
let tabcmd = [] ;

function validation(){
    let valid = true;
    if(tv.value.trim() === ""){
        document.getElementById("qt-error").textContent = "Le champ quantite est obligatoire !"
        valid = false
    }else{
        document.getElementById("qt-error").textContent = ""
    }

    if( !1<=tv.value<=10 ){
        document.getElementById("nb-error").textContent = "losque 1 et 10 !"
        valid = false
    }else{
        document.getElementById("nb-error").textContent = ""
    }

    return valid
}


function remplirTvs(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","data.json",true);
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let respon = JSON.parse(this.responseText);
            jsonvalue = respon ;
            respon.tvs.forEach(t => {
                tv.innerHTML +=`<option value="${t.nom}">${t.nom}</option>`
            });
        }
    }
    xhr.send()
}

function ajouerAupanier(e){
    event.preventDefault();
    jsonvalue.tvs.forEach(t => {
        if(tv.value === t.nom){
            let command = {
                nom : t.nom ,
                prix : t.prix,
                image :t.image,
                quant : qnt.value
            }

            tabcmd.push(command);

        }
    })

    afficher();
    console.log(tabcmd)
    validation()
    
}

function supprimer(e) {
    e.preventDefault();

    let clickb = e.target.closest("tr");
    let index = parseInt(clickb.dataset.index);

    tabcmd.splice(index, 1);

    afficher();
}

function calculerPrixHT(){
    let prixHt = 0
    tabcmd.forEach(cm => {
        prixHt += cm.prix * cm.quant
    })
    return prixHt
}

function calculerPrixTTC(){
    let prixTTC = calculerPrixHT()*1.20
    return prixTTC.toFixed(2)
}

function JsonSerializer(){
    let result = {
        tvs_commande: tabcmd.map(cm => ({
            reference: cm.nom,
            quantite: parseInt(cm.quant)
        }))
    };

    let json = JSON.stringify(result);
    console.log(json);

    return json;
}

function afficher(){
    let tableBody = document.getElementById("table-body")
    tableBody.innerHTML = "";
    tabcmd.forEach((cm,index) => {
        tableBody.innerHTML += `<tr data-index = "${index}">
                                    <th>${cm.nom}</th>
                                    <th>${cm.quant}</th>
                                    <th>${cm.image}</th>
                                    <th> <button onclick="supprimer(event)" class="btn btn-danger px-4"> supprimer </button> </th>
                                </tr>`
    })

    document.getElementById("ht").innerHTML = `${calculerPrixHT() }DH`;
    document.getElementById("ttc").innerHTML = `${calculerPrixTTC() }DH`;

}
calculerPrixHT();
remplirTvs();