// перебираем массив спомощью циклом for
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// ? Foreach-перебирает весь массив и принимает в себя collback funktion функцию приминяет к каждому элементу массива
// ? Collback fn - эта та функция которую мы передаем в качестве аргумента в другой функции и это Collback fn принимает еще другие аргументы (value, index, arry)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach((item, index, array) => {
//   console.log(item);
//   console.log(index);
//   console.log(array);
//   console.log(item * 2);
// });

// ? map() - он также работает как Foreach но есть одно отличие он создает новый массив и закидывает туда уже новые элементы именно те элементы над которыми произвели действия внутри Collback funktion
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.map((item) => {
//   return item + 10;

// });
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.map((item, index, array) => {

//   console.log(item);
//   console.log(index);
//   console.log(array);
// });

// ? filter() - данный метод он отфильртровывает, он так же как и другие принимает Collback funktion
// ? что делает фильтр - он принимает Collback funktion которая должна возвращять нам либо true либо false
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter((item, index, array) => {
//   return item > 4;
// });
// console.log(newArr);

// let str = "ivan, misha, andrei, oleg, aktan";
// // let newStr = str.split(', ')
// let filteredArr = str.split(", ").filter((item) => {
//   return item.length > 4;
//   // return /a/gi.test(item)
// });
// console.log(filteredArr);
// // console.log(newStr);

// ? indexof
// let arr = ["ivan", "misha", "andrei", "oleg", "aktan"];
// let index = arr.indexOf("misha", 2);
// console.log(index);

// ? findIndex()
// let arr = ["ivan", "misha", "andrei", "oleg", "aktan"];
// let index = arr.findIndex((item, index, array) => {
//   return item.length === 5;
// });
// console.log(index);

// ? find()
// let arr = [
//     {
//         name: 'ivan'
//     },
//     {
//         name: 'john'
//     },
//     {
//         name: 'oleg'
//     },
//     {
//         name: 'aktan'
//     },
//     {
//         name: 'emily'
//     }
// ]
// console.log(arr.find(item => item.name === 'oleg'));
// console.log(arr.findIndex(item => item.name === 'oleg'));

// ? every()
// let arr = [1, 2, 3, '10', 12, 23];
// let result = arr.every((item, index, array) => {
//     return typeof item === 'number'
// })
// console.log(result);
// false

// ? some() - он находит хотя бы один элемент в массиве
// let arr = [1, 2, 3, '10', 12, 23];
// let result = arr.some((item) => {
//     return typeof item === 'mumber'
// })
// console.log(result);
// true

// ? includes(element, fromIndex)ы
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.includes(9, 3);
// console.log(result);

// ? reduce() - он испльзуется для каких либо вычеслений
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((prevVal, currVal, currIndex, array) => {
//   // console.log(prevVal);
//   // console.log(currVal);
//   // console.log(currIndex);
//   console.log(array);
// });

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((prevVal, curval) => {
//     return prevVal + curval

// })
// console.log(result);

// ? можно записать так результат не поменяется
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((a, b) => {
//     // return a + b
//     // console.log(a);
// return[...a, b]
// }, [])
// console.log(result);

// ! Foreach
// const languages = ['js', 'python', 'c'];
// languages.forEach((item, index, arry) => {
//     console.log(item);
//     console.log(index);
//     console.log(arry);
// })

// let numbers = [10, 20, 30];
// let sum = 0;
// numbers.forEach((num) => {
//     // sum = sum + sum
//     sum += num
// })
// console.log(sum);

// let numbers = [10, 20, 30];
// let sum = 0;
// numbers.forEach((num, index) => {
//     if(index > 0){
//         sum += num
//     }
//// sum = sum + sum
// })
// console.log(sum);

// const languages = ['JS', 'Python', 'C'];
// let fav = []
// languages.forEach((lang) => {
//     if (lang === "JS"){
//         fav.push('lang')
//     }
// })
// console.log(fav);

// const cats = [
//     {
//         name: "Kitty",
//         age: 2
//     },
//     {
//         name: "Ferry",
//         age: 6
//     },
//     {
//         name: "Lulu",
//         age: 4
//     }
// ]
// let oldCats = []
// cats.forEach((cat, index, array) => {
//     if(cat.age > 5){
//         oldCats.push(cat)
//     }
//     if(array.length - 1 === index){
//         console.log('last cat', cat.name);
//     }
// })
// console.log(oldCats);

// ! MAP - создает новый массив

// let numbers = [10, 20, 30];
// let newArr = numbers.map((num) => num * 2)
// // [20, 40, 60]
// console.log(newArr);

// let numbers = [10, 20, 30];
// numbers.map((item, index, array) => {
//     console.log(item, index);
// })

// ! FIND - возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции, в противном случае возвращается undefined
// let numbers = [1, 2, 3, 4, 5, 6];
// let foundNum = numbers.find((num) => num % 2 === 0)
// console.log(foundNum);

// ! FILTER - создает новый массив, в котором находятся элементы подходящие по условию
// const words = ['banana', 'javascript', 'city', 'car'];
// const longWords = words.filter((item) => item.length > 4)
// console.log(longWords);
// const cats = [
//         {
//             name: "Kitty",
//             age: 2
//         },
//         {
//             name: "Ferry",
//             age: 6
//         },
//         {
//             name: "Lulu",
//             age: 4
//         }
//     ]
// let oldCats = cats.filter((cat) => cat.age > 5)
// console.log(oldCats);

// ! FINDINDEX - возвращает индекс в массиве, если элемент удовлетворяет условию callback функции, в противном случае вернет -1 (если условие даст false)
// const arr = ['Nick', 'Jack', 'Ostin']
// const ind = arr.findIndex((name) => name === 'Ostin')
// console.log(ind);

// ! INDEXOF - возвращает первый индекс, по которому данный элемент найден в массиве, если не найден вернет -1
// ! может принимать второй аргумент (необязательный) с какого индекса начать поиск
// ! отличие от findIndex: indexOf ищет по указанному значению, а findIndex ищет по заданному условию
// const arr = ['Nick', 'Jack', 'Ostin']
// const ind= arr.indexOf("Ostin")
// console.log(ind);

// ! EVERY - вернет true, если все элементы подходят по условию, либо false, если не подходят
// const arr = ['a', 'a', 'a']
// let res = arr.every((word) => word === 'a')
// console.log(res);

// const numbers = [1, 2, 3, 5]
// let res = numbers.every((num) => num % 2 !==0)
// console.log(res);

// ! SOME - вернет true, если хотя бы один элемент подходит по условию, либо false, если ни один не подойдет
// ! принимает callback функцию, а callback функция принимает элемент, индекс, сам массив
// const arr = ['a', 'a', 'c']
// let res = arr.some((item) => item === "a")
// console.log(res);

// ! INCLUDES - вернет true, если переданный элемент содержится в массиве, либо false, если нет
// const arr = ['a', 'b', 'c']
// let res = arr.includes("a")
// console.log(res);
// ! работает и со строками

// ! REDUCE
// ! принимает два аргумента (второй - необязательный): 1 аргумент - callback функция (а callback функция принимает previousValue, currentValue, index, array), 2 аргумент - initial value
// const numbers = [1, 2, 3, 4, 5]
// let sum = numbers.reduce((prev, curr, index, array) => {
//     return prev + curr}, 100)
//                        // "") делает concat
//     console.log(sum);
// // prev 1 + curr 2
// // prev 3 + curr 3
// // prev 6 + curr 4
// // prev 10 + curr 5
// // prev 15

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// let merge = arr.reduce((prev, curr) => prev.concat(curr))
// console.log(merge);
// // [1, 2, 3]
// // [1, 2, 3, 4, 5, 6]
// // [1, 2, 3, 4, 5, 6, 7, 8, 9]
