function indiceDoMaiorValor(array) {
    let indiceDoMaior = 0;
    let maiorValor = array[0];
    
    for (let i in array) {
        if (array[i] > maiorValor) {
            maiorValor = array[i];
            indiceDoMaior = i;
        };
    };
    return indiceDoMaior;
}

console.log(indiceDoMaiorValor([2, 3, 6, 7, 10, 1]));