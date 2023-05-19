/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const myCars = [
  (firstCar = {
    carBrand: "Audi",
    price: 10,
    isAvailableForSale: true,
  }),
  (secondCar = {
    carBrand: "BMW",
    price: 20,
    isAvailableForSale: false,
  }),
  (thirdCar = {
    carBrand: "ZaZ",
    price: 30,
    isAvailableForSale: true,
  }),
];



myCars.push(
  (fourCar = {
    carBrand: "Ij",
    price: 40,
    isAvailableForSale: false,
  })
);

console.log(myCars);

