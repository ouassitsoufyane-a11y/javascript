try {
    let data = '{"name": "Ali"';
    let datta = JSON.parse(data);
} catch (error) {
    console.log("errorJSON",error)
}

// try {
//     let a = 5;
//     let b = 0;
//     let dev = a/b;
//     console.log(dev)
// } catch (error) {
//     if (b === 0 ){
//         throw new Error("لا يمكن القسمة على صفر");
//     }
    
// }

    // try {
    //     let user = null;
    //     console.log(user.name)
    // } catch (error) {
    //     console.log("name is undifinde",error)
    // }
    // finally{
    //     console.log("انتهى التنفيذ")
    // }