let person =[ {nom : "soufiane" , prenomi : "ost" , age : 21 , note : 18 , ceof : 2} , 
              {nom : "hamza" , prenomi : "ostii" , age : 26 , note : 18 , ceof : 2} ,
              {nom : "achref" , prenomi : "ostoo" , age : 19 , note : 18 , ceof : 2}]
person.push({nom : "soufiane" , prenomi : "ost" , age : 20 , note : 18 , ceof : 2})

let stagaire = person.map((item , i) => { 
    return { nom:item.nom  + " " + item.prenomi + "  note global : " + item.note * item.ceof + "  id :" + i}})

// let stagaire = person.map((item , i)) => { nom:item.nom  + " " + item.prenomi + "  note global : " + item.note * item.ceof + "  id :" + i}

console.log(stagaire)

