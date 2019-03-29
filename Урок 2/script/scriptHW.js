console.log('Задание 1');

var a = 1, b = 1, c, d;
c = ++a; console.log('++a = ' + c + ' - сначала выполняется инкремент, потом выводим значение');
d = b++; console.log('b++ = ' + d + ' - сначала выводим значение, потом выполняется инкремент');
c = (2+ ++a); console.log('(2+ ++a) = ' + c + ' - сначала выполняется инкремент, потом оператор сложения');
d = (2+ b++); console.log('(2+ b++) = ' + b + ' - сначала оператор сложения, потом выполняется инкремент');
console.log('a = ' + a + ' - инкремент выполнялся 2 раза');
console.log('b = ' + b + ' - инкремент выполнялся 2 раза');

console.log();
console.log('Задание 2');

var a = 2;
var x = 1 + (a *= 2);
console.log('a = ' + a);
console.log('1 + (a *= 2) = ' + x + ' - сначала в скобках (а = а * 2), потом плюсуем 1');

console.log();
console.log('Задание 3');

var a = Math.floor((Math.random() - .5) * 10);
var b = Math.floor((Math.random() - .5) * 10);

if (a > 0 && b > 0){
    console.log('a и b положительные');
    console.log('их разность = ' + (a - b));
}else if (a < 0 && b < 0){
    console.log('a и b отрицательные');
    console.log('их произведение = ' + (a * b));
}else{
    console.log('a и b разных знаков или 0');
    console.log('их сумма = ' + (a + b));
}

console.log();
console.log('Задание 4');

var a = Math.floor(Math.random()  * 16);

switch (a){
   case 0:
       console.log(a++);
   case 1:
       console.log(a++);
   case 2:
       console.log(a++);
   case 3:
       console.log(a++);
   case 4:
       console.log(a++);
   case 5:
       console.log(a++);
   case 6:
       console.log(a++);
   case 7:
       console.log(a++);
   case 8:
       console.log(a++);
   case 9:
       console.log(a++);
   case 10:
       console.log(a++);
   case 11:
       console.log(a++);
   case 12:
       console.log(a++);
   case 13:
       console.log(a++);
   case 14:
       console.log(a++);
   case 15:
       console.log(a++);
   break;
   }
   
console.log();
console.log('Задание 5');

function getSum(x, y){
   return(x + y);
}

function getSubtract(x, y){
   return(x - y);
}

function getDivide(x, y){
   return(x / y);
}

function getMultiply(x, y){
   return(x * y);
}

var x = 5;
var y = 3;

console.log('Числа ' + x + ' и ' + y);

console.log('Функция суммы = ' + getSum(x, y));
console.log('Функция разности = ' + getSubtract(x, y));
console.log('Функция деления  =' + getDivide(x, y));
console.log('Функция произведения = ' + getMultiply(x, y));
 

console.log();
console.log('Задание 6');

function mathOperation(arg1, arg2, operation){
    switch (operation){
        case 'Sum':
            return getSum(arg1, arg2);
            break;
        case 'Subtract':
            return getSubtract(arg1, arg2);
            break;
        case 'Divide':
            return getDivide(arg1, arg2);
            break;
        case 'Multipl':
            return getMultiply(arg1, arg2);
            break; 
    }
}

console.log('Сумма = ' + mathOperation(x, y, 'Sum'));
console.log('Разность = ' + mathOperation(x, y, 'Subtract'));
console.log('Деление  =' + mathOperation(x, y, 'Divide'));
console.log('Произведение = ' + mathOperation(x, y, 'Multipl'));

console.log();
console.log('Задание 7');

console.log('null == 0 = ' + (null == 0) + ' = 2');
console.log('null > 0 = ' + (null > 0) + ' = 1');
console.log('null < 0 = ' + (null < 0) + ' = 1');
console.log('null <= 0 = ' + (null <= 0) + ' = 1');
console.log('null >= 0 = ' + (null >= 0) + ' = 1');
console.log('null != 0 = ' + (null != 0) + ' = 2');

console.log('1) используется абстрактный алгоритм сравнения для отношений, где null преобразуется в +0, что равно 0');
console.log('2) использует абстрактный алгоритм сравнения для равенств, сначала сравниваются типы где null это null, а 0 число');
console.log('Нашла здесь - https://habr.com/ru/company/ruvds/blog/337732/')

console.log();
console.log('Задание 8');

function power(val, pow) {
  if (pow != 1) {
    return val * power(val, pow - 1);
  } else {
    return val;
  }
}

console.log(power(9, 3));