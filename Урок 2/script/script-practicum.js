function choice(){
    var c = prompt('Будем играть? да/нет = 1/0');
    if (c === '1'){
        num();
    } else if (c === '0'){
        alert('Пока!');
    } else {
        alert ('Вы ввели что-то не то... ');
        choice();
    }
}

function num(){
    var numCom = Math.floor(Math.random()  * 11);
    var numUsr = prompt('Введите число от 0 до 10');
    game(numCom, numUsr)
}
    
function game(numCom, numUsr){
    if (numUsr > numCom){
        numUsr = prompt('Ваше число больше! Попробуйте ещё раз ;)');
        game();
    } else if (numUsr < numCom){
        numUsr = prompt('Ваше число меньше! Попробуйте ещё раз ;)');
        game();
    } else {
        alert('Поздравляю вы выиграли');
    }
}


choice();