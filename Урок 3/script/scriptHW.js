// Задание 1

const task1 = document.getElementById('task1');

function primeNumber() {
    console.log('Задание 1');
    console.log();
    var primeNum = [];
    num = 2;
    while (num <= 100) {
        var numcheck = 1;
        for (var i = 0; i < primeNum.length; i++) {
            if (num % primeNum[i] === 0) {
                numcheck = 0;
            }
        }
        if (numcheck === 1) {
            primeNum.push(num);
        }
        num++;
    }
    primeNum.unshift(1);
    console.log(primeNum);
}

task1.addEventListener('click', primeNumber);

// Задание 2

const task2 = document.getElementById('task2');

var basket = [1500, 8999, 10000]

function getBasket() {
    console.log('Задание 2');
    console.log();
    console.log(basket);
}

task2.addEventListener('click', getBasket);

// Задание 3

const task3a = document.getElementById('task3a');

var nameProduct = ['teddy bear', 'white Lama', 'Duck with duckling']

function getNameProduct() {
    console.log('Задание 3');
    console.log('a');

    var nameProduct = ['teddy bear', 'white Lama', 'Duck with duckling']
    console.log(nameProduct);
}

task3a.addEventListener('click', getNameProduct);

const task3b = document.getElementById('task3b');


function countBasketPrice(basket) {
    var sum = 0;
    for (var i = 0; i < basket.length; i++) {
        sum += basket[i];
    }

    return sum
}

function getCountBasketPrice() {
    console.log('Задание 3');
    console.log('b');
    console.log(countBasketPrice(basket))
}

task3b.addEventListener('click', getCountBasketPrice);

const task4 = document.getElementById('task4');

function cycleFor() {
    console.log('Задание 4');
    console.log();
    for (var i = 0; i < 10; console.log(i++)) {}
}

task4.addEventListener('click', cycleFor);

const task5 = document.getElementById('task5');

function pyramid() {
    console.log('Задание 5');
    console.log();

    var x = '';
    for (var i = 20; i--;) {
        x += 'x';
        console.log(x);
    }
}
task5.addEventListener('click', pyramid);
