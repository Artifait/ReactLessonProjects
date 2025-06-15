"use strict";
const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
function printArray(arr) {
    console.log("Массив:", arr);
}
function printEvenElements(arr) {
    const even = arr.filter((num) => num % 2 === 0);
    console.log("Четные элементы:", even);
}
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
function printMaxElement(arr) {
    const max = Math.max(...arr);
    console.log("Максимальный элемент:", max);
}
function addElement(arr, index, value) {
    if (arr[index] !== undefined) {
        console.log("Элемент с таким индексом уже существует");
    }
    else {
        arr[index] = value;
    }
}
printArray(randomArray);
printEvenElements(randomArray);
console.log("Сумма:", sumArray(randomArray));
printMaxElement(randomArray);
addElement(randomArray, 2, 999);
//# sourceMappingURL=Task1.js.map