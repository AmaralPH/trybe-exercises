const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordena = (array) => `Os números ${array.sort((a, b) => a-b)} se encontram ordenados de forma crescente!`
console.log(ordena(oddsAndEvens));