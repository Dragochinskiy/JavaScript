/**
 * Функция складывает параметр "а" и "b"
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function plus(a, b) {
    return a + b;
}

/**
 * Функция из параметра "a" вычитает "b"
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function minus(a, b) {
    return a - b;
}

/**
 * Функция умножает параметр "a" на "b"
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function umnozhit(a, b) {
    return a * b;
}

/**
 * Функция делит параметр "a" на "b"
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function razdelit(a, b) {
    return a / b;
}

/**
 * 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation может быть "+", "-", "/", "*"
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return plus(arg1, arg2);
        case "-":
            return minus(arg1, arg2);
        case "*":
            return umnozhit(arg1, arg2);
        case "/":
            return razdelit(arg1, arg2);
        default:
            throw new Error("Операция " + operation + "не предусмотрена");
    }
}

console.log(mathOperation(3, 5, "+"));
console.log(mathOperation(3, 5, "-"));
console.log(mathOperation(3, 5, "/"));
console.log(mathOperation(3, 5, "*"));