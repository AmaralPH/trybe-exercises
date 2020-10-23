/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals
 */

let peca = "CaVaLo"
peca = peca.toLocaleLowerCase();

switch (peca) {
    case "peão":
        console.log("1 casa em qualquer direção");
        break;
    case "torre":
        console.log("Qualquer numero de casas, em linha reta");
        break;
    case "cavalo":
        console.log("Em L, 2 casas pra um em linha reta, vira 90º, 3 casas em linha reta");
        break;
    case "bispo":
        console.log("Qualquer número de casas, na diagonal");
        break;
    case "rei":
        console.log("1 casa em qualquer direção");
        break;
    case "rainha":
        console.log("Qualquer numero de casas, em qualquer direção");
        break;
    default:
        console.log("Essa peça não faz parte do xadrez.");
};
