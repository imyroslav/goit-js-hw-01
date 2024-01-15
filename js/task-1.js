
const quantity = prompt("Enter please");

const pricePerDroid = prompt("Enter please");


function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity*pricePerDroid;
    alert(`You orderded ${quantity} droids worth ${totalPrice} credits! `)
};

makeTransaction(quantity, pricePerDroid);








