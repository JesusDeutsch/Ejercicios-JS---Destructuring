// Exercise 1
// Reescribe el código para usar destructuring en vez de asignar cada variable individualmente.

let item = ["Egg", 0.25, 12];
let name = item[0];
let price = item[1];
let quantity = item[2];

const [item1, item2, item3] = item;

console.log(`Item: ${item1}, Quantity: ${item2}, Price: ${item3}`);

// Exercise 2
// Reescribe el código para asignar a cada variable el número correcto.

let numbers = [3, 5, 4, 2, 6, 1];
let [three, five, four, two, six, one] = numbers;

console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);

// Exercise 3
// Tenemos el objeto user. Desestructura sus propiedades en las variables name, age y isAdmin (esta última no existe, tendrás que crear un valor predeterminado false).

let user = { name: "John", years: 30 };

let {name, years:age, isAdmin = false} = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// Exercise 4
// Reescribe el código para desestructurar el array.

let person = [12, "Chris", "Owen"];
const [age, firstName, lastName] = person

// let firstName = person[1];
// let lastName = person[2];
// let age = person[0];

console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);

// Exercise 5
// Reescribe el código para usar desestructuring, teniendo en cuenta que no debes crear ninguna variable vacía:

let person = ["Chris", 12, "Owen"];

const [firstName, , lastName] = person

// let firstName = person[0];
// let lastName = person[2];

console.log(`Name: ${firstName} ${lastName}`);

// Exercise 6
// Desestructura el último elemento del array.

const students = ['Christina', 'Jon', 'Alexandare'];

const [, , lastName] = students;

console.log(lastName);

// Exercise 7
// Usando destructuring, obtén sólo los nombres de los arrays dentro del array.

const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

const [,[student1,student2],[student3,student4]] = moreStudents;

console.log(student1, student2, student3, student4);