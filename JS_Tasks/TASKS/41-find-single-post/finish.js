/** ЗАДАЧА 41 - Поиск объектов в массиве
 *
 * 1. Создайте функцию "findPostById" с двумя параметрами:
 *  - ID поста
 *  - массив постов
 *
 * 2. Функция должна вернуть пост с определенным ID
 *
 * 3. Если поста с определенным ID в массиве постов нет,
 * функция должна вернуть "undefined"
 *
 * 4. Также внутри функции выведите в консоль ID поста
 */

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
];

const findPostById  = (postId, posts) => {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].postId === postId) {
      return posts[i];
    }
  }
  return undefined;
}

// const findPostById = (Id, posts) => {
//   res = undefined;
//   posts.forEach((post) => {
//     if (post.postId === Id) {
//       res = post;
//     }
//     return {};
//   });
//   return res;
// };

// const findPostById = (id, posts) => {
//   return posts.filter((el) => el.postId === id)[0];
// }

console.log(findPostById(6134, posts)); // { postId: 6134, commentsQuantity: 2 }

console.log(findPostById(4511, posts)); // undefined
