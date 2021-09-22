'use strict'

for (let i = 0; i <= 10; i++) {
    if (i == 0) { // Почему если здесь написать i = 0 то браузер виснет?
        console.log(i + '- это ноль');
    }
    else if (i % 2 == 0) {
        console.log(i + '- четное число');
    }
    else {
        console.log(i + '- нечетное число');
    }
}