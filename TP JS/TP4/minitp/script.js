addEventListener("click",(e)=>{
    let btn = e.target
    if(btn){
        console.log(btn)
        btn.style.background = "red";
    }
})

document.getElementById("table-body").addEventListener("click",(e)=>{
    let row = e.target.closest("tr");
    let index = row.dataset.index
    if(row){
        console.log(index)
    }
})

document.querySelector(".delete").addEventListener("click",(e)=>{
    let row = e.target.closest("tr");
    if(row){
        row.remove();
    }
})

document.querySelectorAll("tr").addEventListener("click",(e)=>{
    let row = e.target;
    if(row){
        row.style.background = "red"
    }
})

