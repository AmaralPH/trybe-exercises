function maiorDosNomes(array) {
    let maiorNome = '';

    for (let i in array) {
        if (array[i].length > maiorNome.length) {
            maiorNome = array[i];
        };
    };
    return (maiorNome);
}

console.log(maiorDosNomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))