/*Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, 
"negative" se for negativo e "zero" caso contrário. */

let a = 7;

switch (a > 0) {
    case 0:
        console.log("zero");
        break;
    case (a < 0):
        console.log("negative");
        break;
    case (a > 0):
        console.log("positive");
        break;
    default:
        console.log("valor inválido, por favor informe um número");
}