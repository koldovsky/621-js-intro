// var message = 'Hello JS!';
// let message = 'Hello JS!';
// const message = 'Hello JS!';
// alert(message);

// let num = 42;
// alert(num);
// num = num + 2;
// alert(num);

const userName = prompt("Enter your name");
alert("Hello " + userName);

const promptResult = prompt("Enter your age");
const userAge = Number(promptResult);
alert("You are " + userAge);
const nextAge = add(userAge, 1);
alert("Next year you will be " + nextAge);

// Data types
// Number - Infinity, NaN
// String - '', "", ``
// Boolean - true, false

if (userAge >= 18) { // > < === !== == != <= >= || &&
  alert("You are adult");
} else {
  alert("You are underaged");
}

function add(a, b) {
    const result = a + b;
    return result;
}