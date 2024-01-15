
const quantity = prompt("Enter quantity of droids ordered");

const pricePerDroid = prompt("Enter price per droid");


function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity*pricePerDroid;
    alert(`You orderded ${quantity} droids worth ${totalPrice} credits! `)
};

makeTransaction(quantity, pricePerDroid);








