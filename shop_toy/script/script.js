var getPrice = function () {
    for (let i = 0; i < product.length; i++) {
        let button = document.getElementsByTagName("button");
        button[i].innerHTML = "Купить за " + product[i].price;
    }
};
window.onload = getPrice;
window.addEventListener('click', megaBasket);
var summBasket = document.getElementById("summ");
var summ = 0;

function megaBasket(evt) {
    if (evt.target.classList.contains('addBasket') === true) {
        addAmount(evt);
    }
};

function addAmount(evt) {
    let i = evt.target.value;
    product[i].amount++;
    getSumm(i);
    addToBasket(i);
};

function getSumm(i) {
    summ = summ + product[i].amount * product[i].price;
    summBasket.innerText = "Сумма покупки = " + summ;
};

function addToBasket(i) {
    if (product[i].amount === 1) {
        document.querySelector('#basket').innerHTML += '<p>' + product[i].name + ' по цене ' + product[i].price /* + ' в количестве ' + product[i].amount*/ + '</p>';
    } // else if (product[i].amount > 1){изменить элемент так чтобы в нем менялось product[i].amount }
};
