// Determina si un número es par o impar
import promptSync from "prompt-sync"
const prompt = promptSync()

let n = prompt("Ingrese un número: ");

if (n % 2 == 0) {
    console.log("El número", n, "es par.");
} else {
    console.log("El número", n, "es impar.");
}
