
const quantity = prompt("Enter please qauntity of ordered droids");

const pricePerDroid = prompt("Enter please price of the droid");


function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity*pricePerDroid;
    alert(`You orderded ${quantity} droids worth ${totalPrice} credits! `)
};

makeTransaction(quantity, pricePerDroid);








