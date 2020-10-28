function add(num1, num2) {
    let comp1 = String(num1).length - 1;
    let comp2 = String(num2).length - 1;

    let saida = '';

    let n;

    if (comp1 > comp2) {
        n = comp1 + 1;
    } else {
        n = comp2 + 1;
    };
    
    for (let i = 0; i < n; i += 1) {
        let x = Number(String(num1)[comp1]) + Number(String(num2)[comp2]);
        saida = String(x) + saida;
        comp1 -= 1;
        comp2 -= 1;
        if (comp1 < 0) {
            num1 = '0';
            comp1 = 0;
        } else if (comp2 < 0) {
            num2 = "0";
            comp2 = 0;
        }
    };
    return Number(saida);
}

