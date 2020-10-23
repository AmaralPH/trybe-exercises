/*Escreva um programa que defina três números em variáveis no seu começo e retorne true se 
pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if. */

let a = 10, b = 11, c = 12;

if (a % 2 != 0) {
    console.log(true);
} else {
    b % 2 != 0 || c % 2 != 0 ? console.log(true) : console.log(false);
};