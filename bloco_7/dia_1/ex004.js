const longestWord = (string) => { 
    array = string.split(' ');
    let maior = '';
    for (let palavra of array) {
        if (palavra.length > maior.length) {
            maior = palavra
        }
    }
    return maior;
}





console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'
