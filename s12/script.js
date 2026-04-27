const btnresult = document.querySelector("#btnresult")
const table = document.querySelector("table")

let lista = []

btnresult.addEventListener("click", ajouter)

function afficher(){
    table.innerHTML = `
    <tr>
        <th>ID</th>
        <th>الاسم الكامل</th>
        <th>العمر</th>
        <th>المعلومات</th>
    </tr>`

    lista.forEach(st => {
        table.innerHTML += `
        <tr ">
            <td>${st.id}</td>
            <td>${st.nom}</td>
            <td>${st.age}</td>
            <td>
                <button class="btn-delete" onclick="supprimer(${st.id})">delete</button>
                <button class="btn-modif" onclick="showForm(${st.id})">add module</button>
                <br>
                ${afficherModules(st)}
            </td>
        </tr>`
    })
}

function afficherModules(st){
    let html = ""

    st.modules.forEach(m => {
        html += `
        <div>
            📘 ${m.subjectName} :
            ${m.quiz1} / ${m.quiz2} / ${m.quiz3} / ${m.finalExam}
            final : ${((Number(m.quiz1) + Number(m.quiz2) + Number(m.quiz3) + Number(m.finalExam)*3))/6}
        </div>`
    })

    return html
}

function ajouter(){
    const id = document.querySelector("#studentID").value
    const nom = document.querySelector("#fullName").value
    const age = document.querySelector("#age").value

    const Stagiaire = {
        id: id,
        nom: nom,
        age: age,
        modules: [] 
    }

    lista.push(Stagiaire)
    afficher()
}

function supprimer(id){
    lista = lista.filter(st => st.id != id)
    afficher()
}

function showForm(id){
    afficher()

    table.innerHTML += `
    <tr>
        <td colspan="4">
            <input type="text" id="subjectName" placeholder="المادة">
            <input type="number" id="quiz1" placeholder="فرض 1">
            <input type="number" id="quiz2" placeholder="فرض 2">
            <input type="number" id="quiz3" placeholder="فرض 3">
            <input type="number" id="finalExam" placeholder="امتحان">
            <button onclick="save(${id})">save</button>
        </td>
    </tr>`
}

function save(id){
    let subjectName = document.querySelector("#subjectName").value
    let quiz1 = document.querySelector("#quiz1").value
    let quiz2 = document.querySelector("#quiz2").value
    let quiz3 = document.querySelector("#quiz3").value
    let finalExam = document.querySelector("#finalExam").value

    let module = {
        subjectName,
        quiz1,
        quiz2,
        quiz3,
        finalExam
    }

    let st = lista.find(s => s.id == id)
    st.modules.push(module)

    afficher()
}


function remplir(){
    const id = document.querySelector("#studentID").value
    const nom = document.querySelector("#fullName").value
    const age = document.querySelector("#age").value
    for(i=0 ; i <lista.length ; i++){
        if(id == lista[i].Stagiaire.id){
    
        let Stagiaire = {
        id: id,
        nom: nom,
        age: age,
        modules: [] 
    }

    lista.push(Stagiaire)
    afficher()
        }
    }
}