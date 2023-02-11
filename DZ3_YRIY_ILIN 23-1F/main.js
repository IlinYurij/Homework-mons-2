

var number1 = prompt("Введите первое число")
var number2 = prompt("Введите второе число")
var number = function (num1, num2) {
    if (num1 > num2) {
        alert("Первое число больше")
    } else if (num1 < num2) {
        alert("Второе число больше")
    } else {
        alert("Error")
    }
}
number(number1, number2)


// let num1 = Number(prompt("Введите число а "))
// let sumbol = prompt("Введите символ")
// let num2 = Number(prompt("Введите число в"))
//
// function calc(num1, sumbol, num2) {
//     if (sumbol === "-")
//         alert(num1 - num2)
//     else if (sumbol === "+")
//         alert(num1 + num2)
//     else if (sumbol === "*")
//         alert(num1 * num2)
//     else if (sumbol === "/" && num2 > 0)
//         alert(num1 / num2)
//     else
//         alert("Error")
// }
//
// calc(num1, sumbol, num2)


// let pr = prompt("Напишите что нибудь и я посчитаю символы")
// function sumbol (s){
//     alert(s.length)
// }
// sumbol(pr)



