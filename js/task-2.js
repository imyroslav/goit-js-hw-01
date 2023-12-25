function getShippingMessage(country, price, deliveryFee) {
    let totalPrice = price + deliveryFee;
    console.log(`Shippoing to ${country} will cost ${totalPrice} credits`);
}