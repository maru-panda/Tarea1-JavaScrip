// Clasificación de Número Entero
import promptSync from "prompt-sync"
const prompt = promptSync()

let n = prompt("Ingrese un número entero: ");

if (n > 0) { 
    console.log ("El numero", n, "es positivo.");
} else if (n < 0) {
    console.log ("El numero", n, "es negativo.");
} else {
    console.log ("El numero es cero.");
}