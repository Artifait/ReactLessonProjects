"use strict";
function numberToText(num) {
    if (num < 10 || num > 99)
        return "Введите двузначное число";
    const ones = [
        "",
        "один",
        "два",
        "три",
        "четыре",
        "пять",
        "шесть",
        "семь",
        "восемь",
        "девять",
    ];
    const teens = [
        "десять",
        "одиннадцать",
        "двенадцать",
        "тринадцать",
        "четырнадцать",
        "пятнадцать",
        "шестнадцать",
        "семнадцать",
        "восемнадцать",
        "девятнадцать",
    ];
    const tens = [
        "",
        "",
        "двадцать",
        "тридцать",
        "сорок",
        "пятьдесят",
        "шестьдесят",
        "семьдесят",
        "восемьдесят",
        "девяносто",
    ];
    if (num >= 10 && num <= 19) {
        return teens[num - 10];
    }
    else {
        const ten = Math.floor(num / 10);
        const one = num % 10;
        return `${tens[ten]} ${ones[one]}`.trim();
    }
}
console.log(numberToText(42));
console.log(numberToText(17));
//# sourceMappingURL=Task3.js.map