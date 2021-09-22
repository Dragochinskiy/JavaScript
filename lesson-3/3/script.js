'use strict'

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(prices => {
    prices.price = prices.price - prices.price * 0.15;
});

console.log('цена с учетом скидки = ' + products[0].price + ' рублей');
console.log(`цена с учетом скидки = ${products[1].price} рублей`);
console.log("цена с учетом скидки = " + `${products[2].price} рублей`);