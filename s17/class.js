class Presonne{
    constructor(vId,vNom,vPrenom){
        this.id  = vId;
        this.nom = vNom;
        this.prenom = vPrenom ;
    }
    presentez_vous(){
        return `i am ${this.prenom} ${this.nom}`;
    }
}

class stagiaier extends Presonne{
    constructor(vId,vNom,vPrenom,vGroupe){
        super(vId,vNom,vPrenom)
        this.groupe = vGroupe;

        // super.presentez_vous() + console.log( ` `)
       
    }
     presentez_vous(){
        return `i am ${this.prenom} ${this.nom} group : ${this.groupe}`;
    }
}

const opj = new Presonne(1,"ouassit","soufiane");
const s1 = new stagiaier(2,"ouassit","ahmed","DD")
console.log(opj.presentez_vous());
console.log(s1.presentez_vous());
