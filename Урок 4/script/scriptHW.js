function getObjNum(num) {
    var objNum = {};
    if (num < 0 || num > 999 || isNaN(num)) {
        console.log('Ошибка. Введите число от 0 до 999');
        return objNum;
    } else {
        objNum['едининцы'] = num % 10;
        objNum['десятки'] = (num - objNum['едининцы']) % 100 / 10;
        objNum['сотни'] = (num - objNum['едининцы'] - objNum['десятки'] * 10) % 1000 / 100;
        return objNum;
    }
}

function getNum() {
    let num = +prompt('Введите число: ');
    console.log(num);
    console.log(getObjNum(num));
}
