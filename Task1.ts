const randomArray: number[] = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 100) + 1
);

function printArray(arr: number[]): void {
  console.log("Массив:", arr);
}

function printEvenElements(arr: number[]): void {
  const even = arr.filter((num) => num % 2 === 0);
  console.log("Чётные элементы:", even);
}

function sumArray(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0);
}

function printMaxElement(arr: number[]): void {
  const max = Math.max(...arr);
  console.log("Макс:", max);
}

function addElement(arr: number[], index: number, value: number): void {
  if (arr[index] !== undefined) {
    console.log("Элемент с таким индексом уже существует");
  } else {
    arr[index] = value;
  }
}

printArray(randomArray);
printEvenElements(randomArray);
console.log("Сумма:", sumArray(randomArray));
printMaxElement(randomArray);
addElement(randomArray, 2, 999);
