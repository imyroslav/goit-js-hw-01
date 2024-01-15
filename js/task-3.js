const content = prompt("Enter content width in px, please");

const padding = prompt("Enter padding width in px, please ");

const border = prompt("Enter border width in px, please");


function getElementhWidth(content, padding, border) {
    alert(`Element with is ${1*content + 2*padding + 2*border} px. `)
}

getElementhWidth(content, padding, border);

