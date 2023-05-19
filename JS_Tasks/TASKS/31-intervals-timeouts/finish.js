/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

// Мой вариант 

function myMessage() {
  let counter = 0;
  let printMessage = () => {
    counter++;
    console.log(`Сообщение номер ${counter}`);
    if (counter === 5) {
      clearInterval(intervalId);
    }
  };
  let intervalId = setInterval(printMessage, 2000);
}

setTimeout(myMessage, 1000);
