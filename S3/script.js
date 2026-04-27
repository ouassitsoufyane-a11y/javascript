// type structurels
let etudiant = {
    id : 221 ,
    prenom : "soufiane" ,
    nom : "ouassit" ,
};

// modif
etudiant.prenom = "hamza"

// add
etudiant.filiere = "DD"

// delete
delete etudiant.nom

console.log(etudiant.prenom)
console.log(etudiant)
console.log("nom : " + etudiant.nom + "\nprenom : " + etudiant.prenom )


// les listes 

let country = ["spain", "france", "maroc"]
country[1] = "UK"
console.log(country[1])
country.push("USA")
console.log(...country)

// spread operatorn

let a = [1,2,3,4,5]

let b = [...a , 1]

console.log(b)

//les object
let stagiare = {
    id : 221 ,
    prenom : "soufiane" ,
    nom : "ouassit" ,
};

let str = Object.assign(stagiare , {age : 21})
//let str = {...stagiare , age : 21}
console.log(str)


let person =[ {nom : "souf" , prenomi : "ost" } , {nom : "soufoo" , prenomi : "ost" } , {nom : "soufii" , prenomi : "ost" }]
console.log(person[2].nom) 