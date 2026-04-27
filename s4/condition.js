let note =  15 
let montion 

if (note >= 10 && note <=12){
    montion = "passible"
}

else if (note >= 12 && note <= 14){
    montion = "assez-bien"
}

else if (note >= 14 && note <= 16){
    montion = "bien"
}

else if (note >= 14 && note <= 16){
    montion = "bien"
}

else if ( note >= 16){
    montion = "tree bien"
}

else {
     montion = "no admis"
}

//console.log("le montion est : " + montion)
let jour = ""
let vdate = new Date() ;
switch (vdate.getDay()){
    case 0 :
        {
            jour = "demanche" ;
            break ;
        }
    case 1 :
        {
            jour = "lundi" ;
            break ;
        }
    case 2 :
        {
            jour = "mardi" ;
            break ;
        }
    case 3 :
        {
            jour = "mecredi" ;
            break ;
        }
    case 4 :
        {
            jour = "jeudi" ;
            break ;
        }
    case 5 :
        {
            jour = "vendrede" ;
            break ;
        }
    case 6 :
        {
            jour = "samedi" ;
            break ;
        }
    
    default :
       {
        console.log("not defined")
       }
}

console.log(jour)