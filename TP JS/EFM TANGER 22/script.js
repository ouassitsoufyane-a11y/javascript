let id = document.getElementById("id");
let nom = document.getElementById("nom");
let note = document.getElementById("note");
let filieres = document.getElementsByName("filiere");

let stagiaiers = [];

document.getElementById("ajouter").addEventListener("click", ajouter);

function validation(){
    if(id.value === "" || nom.value === "" || note.value === ""){
        return false;
    }
    return true;
}

function ajouter(){

    if(validation()){

        let filiereValue = "";

        for(let f of filieres){
            if(f.checked){
                filiereValue = f.value;
            }
        }

        let stagiaier = {
            id: id.value,
            nom: nom.value,
            filiere: filiereValue,
            note: Number(note.value)
        };

        stagiaiers.push(stagiaier);

        afficher();

    } else {
        alert("Remplir tous les champs !");
    }
}

function supprimer(index){
    stagiaiers.splice(index, 1);
    afficher();
}

function noteMax(){
    if(stagiaiers.length === 0) return 0;

    let max = stagiaiers[0].note;

    stagiaiers.forEach(st => {
        if(st.note > max){
            max = st.note;
        }
    });

    return max;
}

function rechercher(){
    let found = false;

    for(let st of stagiaiers){
        if(id.value == st.id){

            nom.value = st.nom;
            note.value = st.note;

            filieres.forEach(f => {
                f.checked = (f.value === st.filiere);
            });

            found = true;
            break;
        }
    }

    if(!found){
        alert("Stagiaire non trouvé !");
    }
}

function afficher(){
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    stagiaiers.forEach((st, index) => {

        let color = st.note < 10 ? "red" : "green";

        tbody.innerHTML += `
        <tr>
            <td>${st.id}</td>
            <td>${st.nom}</td>
            <td>${st.filiere}</td>
            <td style="color:${color}">${st.note}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="supprimer(${index})">
                    Supprimer
                </button>
            </td>
        </tr>
        `;
    });

    document.getElementById("bestnote").textContent = noteMax();
}

