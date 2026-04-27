let btn = document.querySelector("#btn-save")
const underlist = []


btn.addEventListener("click", function() {

    let nom = document.querySelector("#nom").value
    let prenom = document.querySelector("#prenom").value 
    let age = document.querySelector("#age").value 

    const person = {
        nom: nom,
        prenom: prenom,
        age: age
    }

    underlist.push(person)
})


let btnshow = document.getElementById("btn-show")

btnshow.addEventListener("click", function(){
    console.log(underlist)
})
