function ehPalindromo(palavra) {
    let ultimoIndex = palavra.length - 1;
    for (let i in palavra) {
        if (palavra[i] != palavra[ultimoIndex]) {
            return false;
        }
        ultimoIndex -= 1;
    };
    return true;
}

console.log(ehPalindromo("arara"))
console.log(ehPalindromo("desenvolvimento"))