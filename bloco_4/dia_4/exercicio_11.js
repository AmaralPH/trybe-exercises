function somatorio(n) {
    let soma = 0;

    for (let i = 1; i <= n; i += 1) {
        soma += i;
    };

    return soma;
}

console.log(somatorio(5))