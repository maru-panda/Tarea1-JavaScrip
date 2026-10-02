// Número Mayor
import promptSync from "prompt-sync"
const prompt = promptSync()

let num1 = prompt("Ingrese el primer número: ");
let num2 = prompt("Ingrese el segundo número: ");
let num3 = prompt("Ingrese el tercer número: ");

let mayor = num1;

if (num1 == num2 && num2 == num3) {
    console.log("Los tres números son iguales.");
} else if (num1 == num2) {
    console.log("El primer y segundo número son iguales.");
} else if (num1 == num3) {
    console.log("El primer y tercer número son iguales.");
} else if (num2 == num3) {
    console.log("El segundo y tercer número son iguales.");
} else {
    console.log("Los tres números son diferentes.");
}

if (num1 < num2 && num2 > num3) {
    mayor = num2;
    console.log("El número mayor es: ", mayor);
} else if (num1 < num2 && num2 < num3) {
    mayor = num3;
    console.log("El número mayor es: ", mayor);
} else {
    console.log("El número mayor es: ", mayor);
}