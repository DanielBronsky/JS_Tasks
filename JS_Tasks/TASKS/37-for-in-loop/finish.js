/** ЗАДАЧА 37 - Цикл "for .. in"
 *
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль
 * выполните проверку того, что свойство является
 * собственным свойством объекта
 */

const myObject = {
  name: "Mike",
  age: 30,
  city: "London",
};

Object.prototype.country = "England";

for (let i in myObject) {
  if (myObject.hasOwnProperty(i)) {
    console.log(myObject[i]);
  }
}
