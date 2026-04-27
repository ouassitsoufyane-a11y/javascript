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
const parent = document.querySelector(".underlist")

btnshow.addEventListener("click", function(){
    underlist.forEach((item,i)=>{
        const lii = document.createElement("li");
        lii.innerText = `${item.nom+ " " + item.prenom + " age : " + item.age}`
    parent.append(lii)
    
    })
        
})