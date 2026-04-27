const article = "Lorem soufian dolor sit sousou consectetur adipisicing elit. Quibusdam porro iure sed pariatur soufiane illum suscipit numquam ab amet  soufiane dolorem unde velit rem, eaque natus magni soufiane quis vitae, harum nihil architecto"
let namesearch = /soufiane?/ig; // i = A-a   g = all the line
// let names = new RegExp('soufiane');
const searchname =article.search(namesearch);
//console.log(searchname)

// match ==> return null or []
let names = new RegExp('soufiane?', "ig");
const search = article.match(names); // .matchall return all the names without g 
//console.log(search)

const update = article.replace(names , "hamza")
//console.log(update)


// exec ==> return null or []
const exech = namesearch.exec(article);
//console.log(exech)

const tester = namesearch.test(article)
//console.log(tester)

listmodules = "POO HTML-JAVA0SCRIPT-CSS PHP"

let cle = /[\s-]/
arrmodules = listmodules.split(cle);
console.log(arrmodules)