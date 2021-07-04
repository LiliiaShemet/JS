// ==========================================
/* Array.prototype.filter */
// ==========================================
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Molly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];
// const activeUsers = users.filter(user => user.name[0].toLowerCase() === 'm');

// console.log(activeUsers);

// ==========================================
/* Array.prototype.reduce */
// ==========================================
// const arr = [1,2,3,4,5,6,7,8,9]; // >5

// const sum = arr
//  .reduce((acc, item) => acc += item, 0);

// console.log(sum);
// console.log(arr);

// ==========================================
/* Array.prototype.sort - сортировка по 1 полю */
// ==========================================
// const arr = [2, 1, 10, 3, 100, 11];
// arr.sort((a, b) => a - b);

// console.log(arr);

// ==========================================
/* Array.prototype.sort - сортировка по 2м полям */
// ==========================================
// const arr = [
//   { name: 'Louis', id: 1 }, // a
//   { name: 'Louis', id: 11 }, // b
//   { name: 'Petro', id: 2 },
// ];
// arr.sort((a, b) => a.name - b.name && a.id - b.id);

// console.log(arr);

// ==========================================
/* Array.prototype.sort - сортировка с прописыванием всех параметров */
// ==========================================
// const arr = [3, 1, 2, 11];

// arr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// });

// console.log(arr);

// ==========================================
/* Проверка текста на палиндром */
/* демонстрация возможности вызова методов массива в цепочку */
// ==========================================
const arr = [
  'redivider',
  'Deified',
  'A nut for a jar of tuna',
  'not a palindrome',
];

/**
 * Функция проверяет является ли строка палиндромом
 * @param {String} str
 */
function isPalindrome(str) {
  const original = str // оригинальная строка
    .toLowerCase() // переводим все символы в нижнюю строку
    .replace(/ /g, ''); // меняем все пробелы на пустоту

  const reversed = original // делаем копию уже подготовленной оригинальной строки
    .split('') // разбиваем строку на массив символов
    .reverse() // реверсим строку, делаем массив задом наперёд
    .join(''); // объединяем массив символов в строку

  return original === reversed; // возвращаем true или false
}

arr.forEach(item => console.log(`${item} - ${isPalindrome(item)}`));
