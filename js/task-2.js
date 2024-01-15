const country = prompt("Enter the country of delivery");

const price = prompt("Enter price of the order");

const deliveryFee = prompt("Enter delivery fee");

function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = (1*price + 1*deliveryFee);
    alert(`Shippoing to ${country} will cost ${totalPrice} credits`);
}

getShippingMessage(country, price, deliveryFee);