let numero = Number(prompt("Ingresa un número:"));

while (!Number.isInteger(numero)) {
  console.log("Error: eso no es un número entero.");
  numero = Number(prompt("Ingresa un número:"));
}

let factorial = 1;
for (let i = 1; i <= numero; i++) {
  factorial = factorial * i;
}

console.log("Número: " + numero + " Factorial: " + factorial);