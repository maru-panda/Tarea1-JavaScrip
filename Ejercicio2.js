//Determinar Tipo de Triángulo
import promptSync from "prompt-sync"
const prompt = promptSync()

let a = Number(prompt("Ingrese el primer lado del triángulo: "));
let b = Number(prompt("Ingrese el segundo lado del triángulo: "));
let c = Number(prompt("Ingrese el tercer lado del triángulo: "));

if (a == b && b == c) {
    console.log("El triángulo es equilátero.");
} else if (a == b || a == c || b == c) {
    console.log("El triángulo es isósceles.");
} else {
    console.log("El triángulo es escaleno.");
}
