'use strict'

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const newArrayPhotos = products.filter(item => 'photos' in item && item.photos.length > 0);
console.log(newArrayPhotos);

const newArrayPhotos2 = products.filter(function nameFunction(param1) {
    return item => 'photos' in item && item.photos.length > 0;
})
console.log(newArrayPhotos2);
// не понял как сделать сделать с обычной функцией




const sortedArray = products.sort(function nameFunction2(param1, param2) {
    return param1.price - param2.price;
});
console.log(sortedArray);
// не понимаю почему из параметра 1 мы вычитаем параметр 2? Почему вычитание?