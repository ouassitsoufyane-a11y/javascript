document.getElementById("btn").addEventListener("click",charger);
function charger(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","stagiares.json",true);
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let respon = JSON.parse(this.responseText);
            console.log(respon)
        }
    }

    xhr.send();
    console.log("test");
}
