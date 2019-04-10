function getHello() {
    var hello = document.getElementById("hello");
    hello.innerHTML = " Привет";
}

function getH3() {
    var w2 = document.getElementById("w2");
    var elementB = document.getElementById("b");
    var elementH3 = document.createElement("h3");
    elementH3.innerHTML = " Hello";
    w2.replaceChild(elementH3, elementB);
}
