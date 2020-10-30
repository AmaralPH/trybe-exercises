function verificaFimPalavra(palavra, fim) {
    let letrasFim = fim.length;
    let indiceFinalPalavra = palavra.length - 1;
    let indiceFinalSubStr = letrasFim - 1;

    for (let i = 0; i < letrasFim; i += 1) {
        if (palavra[indiceFinalPalavra] != fim[indiceFinalSubStr]) {
            return false;
        };
    };

    return true;
}

console.log(verificaFimPalavra("joaofernando", "ando"))
console.log(verificaFimPalavra("joaofernando", "fernan"))
console.log(verificaFimPalavra("trybe", "be"))

