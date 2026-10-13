// Clasificación de Edad
import promptSync from "prompt-sync"
const prompt = promptSync()

let edad = prompt("Ingrese su edad: ");

if (edad >= 0 && edad < 12) {
    console.log("Usted es un niño.");
} else if (edad >= 12 && edad <= 17) {
    console.log("Usted es un adolescente.");
} else if (edad >= 18 && edad <= 64) {
    console.log("Usted es un adulto.");
} else {
    console.log("Usted es un anciano.");
}
