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

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const alunosMat = (obj) => {
    let soma = 0;
    const chaves = Object.keys(obj);
    for (let chave of chaves) {
        if (obj[chave].materia === 'Matemática') {
            soma += obj[chave].numeroEstudantes;
        }
    }
    return soma;
}

// console.log(alunosMat(allLessons))

const createReport = (obj, prof) => {
    const chaves = Object.keys(obj);
    const objSaida = { professor: prof, aulas: [], estudantes: 0 };
    for (let chave of chaves) {
        if (obj[chave].professor === prof) {
            objSaida.aulas.push(obj[chave].materia);
            objSaida.estudantes += obj[chave].numeroEstudantes;
        }
    }
    return objSaida
}

console.log(createReport(allLessons, 'Maria Clara'))