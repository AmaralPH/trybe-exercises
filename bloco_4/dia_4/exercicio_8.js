function indiceDoMenorValor(array) {
    let menorValor = array[0];
    let indiceDoMenor = 0;

    for (let i in array) {
        if (array[i] < menorValor) {
            menorValor = array[i];
            indiceDoMenor = i;
        };
    };
    return indiceDoMenor;
}

console.log(indiceDoMenorValor([2, 4, 6, 7, 10, 0, -3]))