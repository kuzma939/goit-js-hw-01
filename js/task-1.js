function makeTransaction(quantity, pricePerDroid) {
const quantity = 5;
const  pricePerDroid = 3000;
const totalPrice = quanTity * pricePerDroid;
const makeTransaction = `You ordered ${quantity} droids worth ${totalPrice} credits!`
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"

}

