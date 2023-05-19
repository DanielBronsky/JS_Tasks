/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};

// Создайте функцию здесь

// const sumObjectValues = (object) => {
//   let sum = 0;
//   for (let key of Object.keys(object)) {
//     if (typeof object[key] === "number") {
//       sum += object[key];
//     }
//   }
//   return sum;
// };

const sum1 = Object.entries(objectWithNumbers);
console.log(sum1);

const sumObjectValues = (object) => {
  const sum = Object.keys(object).reduce((acc, key) => {
    if (typeof object[key] === "number") {
      return acc + object[key];
    }
    return acc;
  }, 0);

  return sum;
};



const result = sumObjectValues(objectWithNumbers);
console.log(result);
//42
