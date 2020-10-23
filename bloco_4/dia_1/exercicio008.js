/*Escreva um programa que defina três números em variáveis no seu começo e 
retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if. */

let a = 11, b = 14, c = 21;

if (a % 2 == 0) {
    console.log(true);
} else {
    (b % 2 == 0 || c % 2 == 0) ? console.log(true) : console.log(false);
};