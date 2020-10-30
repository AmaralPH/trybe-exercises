function converteRomanos(numeroRomano) {
    let romanos = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    
    let finalIndex = numeroRomano.length - 1;

    let soma = 0;

    for (let i = finalIndex; i >= 0; i -= 1) {
        if (romanos[numeroRomano[i]] < romanos[numeroRomano[i+1]]) {
            soma -= romanos[numeroRomano[i]];
        } else {
            soma += romanos[numeroRomano[i]];
        }
    }
    return soma;
}

console.log(converteRomanos("XLVII"))