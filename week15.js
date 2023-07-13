//Задание 1
// Выведите числа от 1 до 10 в консоль
for (i = 1; i < 11; i++) {
    console.log(i)
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (a = 1; a < 20; a++) {
    if (a % 2 == 0) {
        console.log(a)
    }
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (b = 10; b > 0; b--) {
    console.log(b)
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (c = 1; c < 11; c++) {
    console.log(c * 5)
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
function sumTo(n) {
    let sum = 0;
    for (let d = 1; d <= n; d++) {
        sum += d;
    }
    return sum;
}
console.log(sumTo(100));

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (e = 0; e < array.length; e++) { console.log(array[e]); }

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
const num = numbers.length
function sumNumbers(num) {
    let summ = 0;
    for (let f = 1; f <= num; f++) {
        summ += f;
    }
    return summ;
}
console.log(sumNumbers(num));

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (g = 0; g < animals.length; g++)
    console.log(`${animals[g]} - прекрасное животное;`);

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (f = 0; f < str.length; f++)
    console.log(str[f]);

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let arr of array)
    console.log(arr);

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
//const sentences2 = sentences.split('')
//console.log(sentences2);

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
function sum() {
    let sum = 0;
    for (number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sum());

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let lis of list) {
    console.log(lis.length)
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words2 = ['маяк', 'кружка', 'персик']
for (let word of words2) {
    console.log(word.toUpperCase);
}

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
function toCount() {
    for (greet of greeting) {
        const count = greeting.includes(vowels)

    }
}
console.log(toCount());


//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];
//const newWords = words.split(',').join(' ');
//console.log(newWords);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
// const Number1 = 1;
// while (Number1 < 11) {
//     console.log(Number1);
//     Number1++;
// }
//Не понимаю, почему не работает???

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
// const Number2 = 10;
// while (Number2 > 0) {
//     console.log(Number2);
//     Number1--;
// }
//Такая же ерунда, как в 17м задании...

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
while (allNumbers > 0) {
    console.log(allNumbers)
}
//не понимаю, как использовать и while и break и массив?...

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
do { console.log(random); }
while (random < 0);
//почему не срабатывает???

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
// let t = 1;
// t += 1;
//if (t % 3 == 0) { return false }
// do { console.log(t); }
// while (t < 100)
//тут вообще получился бесконечный цикл и я ничего не поняла(((

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let count = 0;
for (; ;) {
    const x = +prompt('введите число');
    count = count + x;
    if (count > 100) { break }
}
console.log(count);

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
function getBlue() {
    const tytle = document.querySelectorAll('h4');
    tytle.style.backgroundColor = "blue";
}
console.log(getBlue());

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
//тут вообще белый шум...
