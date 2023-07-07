"use strict";
/*let number = 5;
con leftBorderWidth = 1;
number = 10;
console.log(number);

alert("Danger!");*/

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
         result[i] = arr[i];
    }
    // Пишем решение вот тут
    
    
    // Не трогаем
    console.log(result);
    return result;
}

firstTask();
