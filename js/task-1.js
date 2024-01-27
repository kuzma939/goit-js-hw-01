
function makeTransaction(quantity, pricePerDroid) {
    
const numberDroids = Number.parseFloat(quantity);
const priceDroids = Number.parseFloat(pricePerDroid);
const totalPrice = numberDroids * priceDroids;
const texDroids = `You ordered ${numberDroids} droids worth ${totalPrice} credits!`;
return texDroids;
} 
 makeTransaction("5", "3000");
 makeTransaction("3", "1000");
 makeTransaction("10", "500");
 console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
