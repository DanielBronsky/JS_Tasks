/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
];
console.log(postsJSON);

const postsJSON_Parse = postsJSON.map((jsonString) => JSON.parse(jsonString));

console.log(postsJSON_Parse);


const postsJSON_Array = postsJSON_Parse.map((post) => [
  post.postId,
  post.commentsQuantity,
]);

console.log();

console.log(postsJSON_Array[1][0]);
console.log(postsJSON_Array[3][1]);

// const postsJSON = [
//   '{"postId":1355,"commentsQuantity":5}',
//   '{"postId":5131,"commentsQuantity":13}',
//   '{"commentsQuantity":2}',
//   '{"postId":2351,"commentsQuantity":8}',
// ];

// const postsJSON_Parse = postsJSON.map((jsonString) => JSON.parse(jsonString));
// const postsJSON_Object = postsJSON_Parse.reduce((obj, post) => {
//   obj[post.postId] = post.commentsQuantity;
//   return obj;
// }, {});

// console.log(postsJSON_Object);
