/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 // <-- выражение-инструкция (expression statement)

// инструкция (statement)
const myObject = { // <-- выражение (expression)
  x: 10,
  y: true,
}

// выражение-инструкция (expression statement)
myObject.z = 'abc' // <-- выражение (expression)

delete myObject.x // <-- выражение-инструкция (expression statement)

let newVariable // <-- инструкция (statement)

// выражение-инструкция (expression statement)
newVariable = 30 + 5 // <-- выражение (expression)

// выражение-инструкция (expression statement)
console.log(newVariable) // <-- выражение (expression)

// инструкция (statement)
if (newVariable > 10) { 
  /**   ^
   * выражение (expression)
   */

// выражение-инструкция (expression statement)
  console.log(`${newVariable} больше 10`) // <-- выражение (expression)
  /**        ___________________________
   *                      ^
   *          выражение (expression)
   */
}
