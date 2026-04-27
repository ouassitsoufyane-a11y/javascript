const cart = [
  { id: 1, name: "Laptop", price: 1000, quantity: 1 },
  { id: 2, name: "Mouse", price: 50, quantity: 2 },
  { id: 3, name: "Keyboard", price: 100, quantity: 1 },
  { id: 4, name: "Headphones", price: 150, quantity: 6 }
];


let product = cart.find(p => p.id > 2 ) ;
console.log(product)

let expproduct = cart.filter(item => item.price >= 100 );
console.log(expproduct);

let totalproduct = cart.map(item => {
    return "prix total pour " + item.name + "est : " + item.price * item.quantity +"DH"
});
console.log(totalproduct);

cart.splice(1,1)

console.log(cart)