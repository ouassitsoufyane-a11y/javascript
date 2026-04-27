document.getElementById("addBtn").addEventListener("click",sendaysnc);


function send(){
    getStagiaier()
.then(result => console.log(result)) 
.catch(result => console.log(result));
};

async function sendaysnc(){
    try{
        let stagiaier = await getStagiaier();
        console.log(stagiaier);
    }catch(error){
        console.error("not found")
    }
}

function getStagiaier(){
    let valid = false;
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(valid){
            resolve([{id: 1,name: "Alice",age: 25,email: "alice@example.com",isActive: true},
                     {id: 2,  name: "Bob",  age: 30,  email: "bob@example.com",  isActive: false},
                     { id: 3, name: "Charlie", age: 28, email: "charlie@example.com", isActive: true}])
            }else{
                reject("not found")
            }

        },2000)
        
    })
};



