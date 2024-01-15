
const quantity = prompt("кількість замовлених дроїдів");

const pricePerDroid = prompt("вартість одного дроїда");


function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity*pricePerDroid;
    alert(`You orderded ${quantity} droids worth ${totalPrice} credits! `)
};

makeTransaction(quantity, pricePerDroid)

// alert(`You orderded ${quantity} droids worth  ${totalPrice} credits! `);






