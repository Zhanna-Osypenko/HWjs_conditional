console.log("hello node JS");
// =====================================
// Задание 1: Пользователь вводит число, проверьте его на четность и выведите соответствующее сообщение (if)

let number1 = prompt("Enter number:");

if (isNaN(number1)) {
    console.log(`You entered not a number`);
} else if (number1 % 2 === 0) {
    console.log(`You entered even number`);
} else {
    console.log(`You entered odd number`);
}

// =====================================
// Задание 2: Пользователь вводит число, выведите сообщение, является ли число положительным или отрицательным (тернарный оператор)

let number2 = +prompt("Enter number:");

let isPositive = (number2 > 0)? 
    "Positive number" : (number2 < 0)? 
    "Negative number" : "Zero"

console.log(isPositive);     

// =====================================
// Задание 3: Пользователь вводит число, проверьте его на четность и выведите соответствующее сообщение с помощью тернарного оператора

let number3 = +prompt("Enter number:");

let isEven = (number3%2 === 0)? 
    "even number" : "odd number"

console.log(isEven); 





