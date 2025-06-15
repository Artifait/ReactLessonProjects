function numberToText(num: number): string {
  if (num < 10 || num > 99) return "инвалид намбэр";

  const ones: string[] = [
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
  const teens: string[] = [
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
  const tens: string[] = [
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
  } else {
    const ten = Math.floor(num / 10);
    const one = num % 10;
    return `${tens[ten]} ${ones[one]}`.trim();
  }
}

console.log(numberToText(42));
console.log(numberToText(17));
