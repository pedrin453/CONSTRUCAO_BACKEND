const prompt = require("prompt-sync")();

const { calcularNotaA1, calcularNotaA2, calcularNotaFinal } = require("./CalculadoraNota");

let exerciciosA1 = parseFloat(prompt("Qual a nota do exercicio A1: "));
let trabalhoA1 = parseFloat(prompt("Qual a nota do trabalho A1: "));
let provaA1 = parseFloat(prompt("Qual a nota da prova A1: "));

let notaA1 = calcularNotaA1(exerciciosA1, trabalhoA1, provaA1);

console.log("### Cálculo da nota A1 ###");
console.log("Exercícios A1:", exerciciosA1);
console.log("Trabalho A1:", trabalhoA1);
console.log("Prova A1:", provaA1);
console.log("Nota A1 Calculada:", notaA1);

let exerciciosA2 = parseFloat(prompt("Qual a nota do exercicio A2: "));
let trabalhoA2 = parseFloat(prompt("Qual a nota do trabalho A2: "));
let provaA2 = parseFloat(prompt("Qual a nota da prova A2: "));

let notaA2 = calcularNotaA2(exerciciosA2, trabalhoA2, provaA2);

console.log("### Cálculo da nota A2 ###");
console.log("Exercícios A2:", exerciciosA2);
console.log("Trabalho A2:", trabalhoA2);
console.log("Prova A2:", provaA2);
console.log("Nota A2 Calculada:", notaA2);

console.log("### Cálculo da nota final ###");
console.log("Nota Final:", notaFinal);

if(notaFinal >= 5) {
    console.log("Parabéns "+ nome + ", você foi aprovado!");
} else {
    console.log("Infelizmente "+ nome + ", você foi reprovado.");
}

