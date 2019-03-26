
console.log("Задание 1");
var tC = prompt ("Введите температуру в Цельсиях");
var tF = (9 / 5) * parseInt(tC) + 32;
console.log("Температура в Цельсиях " + tC + " = температуре в Фаренгейтах " + tF);

console.log("Задание 2");
var name = "Василий";
var admin = name;
console.log(admin);

console.log("Задание 3");
var a = 1000; //number
var b = "108"; //string
console.log(a + b);

console.log("Задание 4");
console.log("Aтрибуты тега script async и defer используются для асинхронной загрузки скриптов.");
console.log("Tолько для внешних скриптов.");
console.log("Async - страница и скрипты будут выполнятся по мере загрузки.");
console.log("Defer - сначала загружается страница потом скрипты в порядке их подключения в коде страницы.");