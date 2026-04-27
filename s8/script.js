const stagiarer = []

document.querySelector("#btn-save").addEventListener("click",save)
document.querySelector("#btn-show").addEventListener("click",show)

function save(e){
    e.preventDefault();
    let nom = document.querySelector("#nom").value
    let prenom = document.querySelector("#prenom").value
    let age = document.querySelector("#age").value

    let person = {
        id : stagiarer.length,
        nom : nom,
        prenom : prenom,
        age : age 
    }

    stagiarer.push(person)
}

function show(e){
    e.preventDefault();
    console.log(stagiarer)
}
