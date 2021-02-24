function hydrate(bebidas) {
    let coposDagua = 0;
    bebidas.split(' ').forEach((digito) => {
        if (parseInt(digito)) {
            coposDagua += Number(digito);
        }
    });
    if (coposDagua > 1) {
        return `${coposDagua} copos de água`;
    } else {
        return `${coposDagua} copo de água`;
    }
}

module.exports = hydrate;