// Calculo de notas
import promptSync from "prompt-sync"
const prompt = promptSync()

let nota = prompt("Ingrese su nota: ");

if (nota >= 90 && nota <= 100) {
    console.log("Su nota tiene clasificación de A.");
} else if (nota >= 80 && nota <= 89) {
    console.log("Su nota tiene clasificación de B.");
} else if (nota >= 70 && nota <= 79) {
    console.log("Su nota tiene clasificación de C.");
} else if (nota >= 60 && nota <= 69) {
    console.log("Su nota tiene clasificación de D.");
} else {
    console.log("Su nota tiene clasificación de F.");
}
