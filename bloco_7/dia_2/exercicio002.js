const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};
// exercicio 1
const modifyObj = (obj, chave, valor) => {
    obj[chave] = valor;
}

modifyObj(lesson2, 'turno', 'manhã');
console.log(lesson2)

//exercicio 2
const listKeys = (obj) => Object.keys(obj).forEach(key => console.log(key));

listKeys(lesson2)

// exercicio 3
const objLength = (obj) => Object.keys(obj).length;

console.log(objLength(lesson2))

//exercicio 4
const listValues = (obj) => Object.values(obj).forEach(value => console.log(value));

listValues(lesson2)

// exercicio 5
const geraCoisa = (listaDeObj) => {
    let obj = {};
    const saida = {};
    for (let i = 1; i <= listaDeObj.length; i += 1) {
        saida['lesson' + i] = Object.assign({}, listaDeObj[i-1]);
    };
    return saida;
}
const allLeasons = geraCoisa([lesson1, lesson2, lesson3]);
console.log(allLeasons)

//exercicio 6

const contaEstudantes = (obj) => {
    let contagem = 0;
    for (materia in obj) {
        contagem += obj[materia].numeroEstudantes;
    }
    return contagem;
}

console.log(contaEstudantes(allLeasons))

// exercicio 7

const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(lesson1, 0))

//exercicio 8

const verifyPair = (obj, chave, valor) => {
    const lista = Object.entries(obj);
    for (par of lista) {
        if (par[0] == chave && par[1] == valor) {
            return true;
        }
    }
    return false;
}
console.log(verifyPair(lesson3, 'turno', 'noite'))

// exercicio 9 (bonus 1)


const frequencia = (obj, materia) => {
    const chaves = Object.keys(obj);
    for (chave of chaves) {
        if (obj[chave]['materia'] == materia){
            return obj[chave]['numeroEstudantes'];
        }
    }
}

console.log(frequencia(allLeasons, 'Matemática'))


// exercício 10 (bonus 2)

const createReport = (obj, prof) => {
    const relatorio = {
        professor: prof,
        aulas: [],
        estudantes: 0,
    }
    const aulas = Object.keys(obj);
    for (aula of aulas) {
        if (obj[aula].professor == prof) {
            console.log(obj[aula]['aulas'])
            relatorio.aulas.push(obj[aula]['materia']);
            relatorio.estudantes += obj[aula]['numeroEstudantes'];
        }
    }
    return relatorio;
}

console.log(createReport(allLeasons, 'Maria Clara'))
