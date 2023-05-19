/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

console.log(firstFunction(2, 3));


function firstFunction(a, b) {

  return a + b;
}

const secondFunction = function (a, b) {
  
  return a + b;
};

console.log(secondFunction(4, 6));
