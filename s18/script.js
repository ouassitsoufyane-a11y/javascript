let success = false;

const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve("okk");
  } else {
    reject("noo");
  }
});

promise
.then(result => console.log(result))
.catch(error => console.log(error));

const promis = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(success){
        resolve("okkkk⏳");
    }else{
        reject("noooo")
    }
    
  }, 5000);
});

promis.
then(result => console.log(result))
.catch(result=> console.log(result));
