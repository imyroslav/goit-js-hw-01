
const quantity = prompt("Enter quantity of ordered droids");

const pricePerDroid = prompt("Enter droid price");


function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity*pricePerDroid;
    alert(`You orderded ${quantity} droids worth ${totalPrice} credits! `)
};

makeTransaction(quantity, pricePerDroid);








