

const btnAjouter = document.getElementById("ajouter")
const btnEnreg = document.getElementById("enreg")

const lista = []


btnAjouter.addEventListener("click",(e)=>{
    e.preventDefault();
    let id = document.getElementById("id").value
    let nom = document.getElementById("nom").value
    let groupe = document.getElementById("groupe").value
    let note = document.getElementById("note").value
    let filiere = document.querySelector('input[name="filiere"]:checked').value
    let modules = []
    document.querySelectorAll('input[name="module"]:checked')
       .forEach(cb => modules.push(cb.value))


    let person = {
        id : id ,
        nom : nom , 
        groupe : groupe,
        filiere : filiere,
        modules : modules ,
        note : note 
    }

    lista.push(person)

})

const table = document.querySelector(".table")
btnEnreg.addEventListener("click",(e)=>{
    e.preventDefault();

    table.innerHTML = `<tr>
                            <th>ID</th>
                            <th>NOM</th>
                            <th>NOTE</th>
                            <th>FILIERE</th>
                            <th>GROUPE</th>
                            <th>MODULE</th>
                            <th>GESTION</th>
                       <tr>`  

    lista.forEach(person => {
        table.innerHTML += `
        <tr>
            <td>${person.id}</td>
            <td>${person.nom}</td>
            <td>${person.note}</td>
            <td>${person.filiere}</td>
            <td>${person.groupe}</td>
            <td>${person.modules.join(", ")}</td>
    
            <td>
                <button id="btn-delete" >delete</button>
                <button id="btn-modif">modif</button>
            </td>
        </tr>
        `
    })
})







