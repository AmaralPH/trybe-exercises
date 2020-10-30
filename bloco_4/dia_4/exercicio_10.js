function maisRepetido(array) {
    let aparicoes = {};

    for (let i in array) {
        if (aparicoes[array[i]] == null) {
            aparicoes[array[i]] = 1;
        } else {
            aparicoes[array[i]] += 1;
        };
    };

    let maisExibido;
    let exibicoes;
    
    for (let key in aparicoes) {
        if (maisExibido == null) {
            maisExibido = key;
            exibicoes = aparicoes[key];
        } else {
            if (aparicoes[key] > exibicoes) {
                maisExibido = key;
                exibicoes = aparicoes[key];
            };
        };
    };
    
    return maisExibido;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]))