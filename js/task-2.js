function getShippingMessage(country, price, deliveryFee) {
    const countryDelivery = Number.parseFloat(country);
    const totalCost = Number.parseFloat(price);
    const shippingCost = Number.parseFloat(deliveryFee);
    const totalPrice = totalCost + shippingCost;
const texDroids = `Shipping to ${countryDelivery} will cost ${totalPrice} credits`;
    return texDroids;
}
getShippingMessage("Australia", "120", "50");
getShippingMessage("Germany", "80", "20");
getShippingMessage("Sweden", "100", "20");
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"