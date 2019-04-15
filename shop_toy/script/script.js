var button = document.getElementsByTagName("button");
var getPrice = function () {
    for (let i = 0; i < product.length; i++) {
        button[i].innerHTML = "Купить за " + product[i].price;
    }
}
window.onload = getPrice;

function addAmount() {
    let i = event.target.id;
    product[i].amount++;
    getSumm(i);
}

function get() {
    button.onclick = addAmount();
}
var summ = 0;

function getSumm(i) {
    summ = summ + product[i].amount * product[i].price;
    outputSumm();
}

function outputSumm() {
    let summBasket = document.getElementById("summ");
    summBasket.innerHTML = "Сумма покупки = " + summ;
}
window.onclick = get;
