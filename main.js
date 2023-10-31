/*
1) На forEach:
    - Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел
*/
// let numbers = [2,4,3,6,8];
// let squareArray = numbers.forEach(item => console.log(item*item))
// //2) - Дан массив с числами. Найдите сумму этих чисел. forEach
// let sum = 0;
// let sumArray = numbers.forEach(item => {
//     sum += item;
// } )
// console.log(sum);

/*
2) На map:
    - Дан массив с числами. Сделайте из него массив,
    состоящий из квадратов этих чисел.
*/
// let nums = [2,3,5,8,10];
// const mapArray = nums.map(item => {
//     const result = item*item;
//     return result;
// })
//
// console.log(mapArray);

/*
3) На reverse:
    - Дан массив с днями недели ['Понедельник', 'Вторник'...].
Сделайте так, что он начинался с воскресенья и заканчивался понедельником.
*/
// let weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// const newWeekDays = weekDays.reverse();
// console.log(newWeekDays);

//4) На split и join:
//1)- C помощью метода join превратить массив [3, 2, 1]
// в строку "3 больше, чем 2 больше, чем 1"
// let array = [3 , 2, 1];
// let newArray = array.join(' больше, чем ')
// console.log(newArray);
//2) - Дана строка 'я учу javascript!'.
// С помощью метода split запишите каждое слово этой строки
// в отдельный элемент массива.
// let str = 'я учу javascript!';
// let splitArray = str.split(' ');
// console.log(splitArray);
//3) - В переменной date лежит дата в формате '2025-12-31'.
// Преобразуйте эту дату в формат '31.12.2025'.
// let date = '2025-12-31';
// const newDateArr = date.split('-').reverse().join('.');
// console.log(newDateArr);
//5) На filter:
// - Дан массив с числами. Оставьте в нем только отрицательные числа.
//     В отдельную переменную положите количество отрицательных чисел в этом массиве.
//  let numbers = [1,2,3,-4, -8,-12,-30,4,5,1,-2,-5];
// let filterArray = numbers.filter(item => {
//     if(item < 0){
//         return item;
//     }
// })
//
//  console.log(filterArray.length); //6
// //- Дан массив со строками. Оставьте в нем только те строки,
// // длина которых больше 5-ти символов.
// let wordArray = ['first','second','third','fourth','fifth','sixth','seventh'];
// const filterArray2 = wordArray.filter((item, idx, array) => {
//     if(item.length > 5) {
//         return item;
//     }
// })
//
// console.log(filterArray2);





