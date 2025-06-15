const array1: number[] = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 50)
);
const array2: number[] = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 50)
);

function mergeUnique(arr1: number[], arr2: number[]): number[] {
  return Array.from(new Set([...arr1, ...arr2]));
}

function commonElements(arr1: number[], arr2: number[]): number[] {
  return Array.from(new Set(arr1.filter((num) => arr2.includes(num))));
}

function difference(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => !arr2.includes(num));
}

console.log("Массив 1:", array1);
console.log("Массив 2:", array2);
console.log("Без повторов:", mergeUnique(array1, array2));
console.log("Общие элементы:", commonElements(array1, array2));
console.log("Разность массивов:", difference(array1, array2));
