// arrow function ( les fonctions flechees)

// function somme(x , y){
//     return x + y
// }


// let somme = (x , y ) => x + y


let somme = (x , y ) =>{
    return x + y
}
console.log(somme(12,22))

let person =[ {nom : "soufiane" , prenomi : "ost" , age : 21 } , {nom : "hamza" , prenomi : "ostii" , age : 26} , {nom : "achref" , prenomi : "ostoo" , age : 19}]
person.push({nom : "soufiane" , prenomi : "ost" , age : 20})
// let nomperson = person.map((item) => item.nom )
let nomperson = person.map(function(item){
    return {nom:item.nom + " " + item.prenomi,  age:item.age  , group : "DD"}
})
console.log(nomperson)