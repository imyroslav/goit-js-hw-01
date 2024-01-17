function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = (1*price + 1*deliveryFee);
    alert(`Shippoing to ${country} will cost ${totalPrice} credits`);
}
