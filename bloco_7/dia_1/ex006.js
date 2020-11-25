const alteraString = (novaPalavra, string) => {
    listaString = string.split(' ');
    for (let i in listaString) {
        if (listaString[i] == 'x') {
            listaString[i] = novaPalavra;
        }
    }
    return listaString.join(' ')
}

const principaisSkills = [
    'JavaScript',
    'HTML',
    'CSS',
    'Git',
    'Unix'
]

const criaNovaString = (string) => {
    let saida = string + `\n \n`;
    skills = principaisSkills.sort((a, b) => a - b);
    for (let habilidade of skills) {
        saida += `  - ${habilidade}\n`
    }
    saida += `\n#goTrybe`
    return saida;
}

console.log(criaNovaString(alteraString('Pedro', 'Tryber x aqui!')))