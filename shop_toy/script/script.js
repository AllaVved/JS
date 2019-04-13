function countBasketPrice(product) {
    var sum = 0;
    for (var i = 0; i < product.length; i++) {
        sum += product[i].price;
    }

    return sum
}
console.log(countBasketPrice(product))
