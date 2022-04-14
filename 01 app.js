// alert(10);
// 1.Переменные
// variable

// const firstName = 'Egore';
// let age = 41;
// const isProgrammer = true;
// const lastName = prompt('Введите фамилию');
// alert(firstName + ' ' + lastName);

// 3  Операторы
// const currentYear = 2022;
// const birthYear = 1980;
// const age = currentYear - birthYear;
// console.log(age);

// const isProgrammer = true;
// const firstName = 'Egore';
// const age = 41;
// let x;
// console.log(typeof isProgrammer);
// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof x);
// console.log(null);

// const fullAge = 41;
// const currentYear = 2022;
// const birthYear = 1980;
// const isFullAge = currentYear - birthYear >= fullAge;
// console.log(isFullAge);

// Function

// function calculateAge(year) {
//     return 2022 - year
// }

// // const myAge = calculateAge(1980);
// // console.log(myAge);
// // console.log(calculateAge(1985));

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     console.log('Man about name ' + name + ' ,which age of ' + age)
// }
// logInfoAbout('egor', 1980)
// logInfoAbout('elena', 1975)

// Object
const person = {
    firstName: 'Egore',
    lastName: 'Kholopov',
    year: 1980,
    languages: ['Cz', 'En', 'Ru'],
    hasWife: false,
    greet: function () {
        console.log('greet');
    }
}
console.log(person);
console.log(person.firstName);
console.log(person.hasWife);
const key = 'languages';
console.log(person[key]);
