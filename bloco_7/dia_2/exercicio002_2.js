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

const addTurno = (obj, key, value) => {
    obj[key] = value;
}

addTurno(lesson3, 'turno', 'noite');
// console.log(lesson2);

const listKeys = (obj) => Object.keys(obj);

// console.log(listKeys(lesson2))

const objLength = (obj) => {
    return listKeys(obj).length;
}

// console.log(objLength(lesson2))

const objValues = (obj) => Object.values(obj);

// console.log(objValues(lesson2))

// const allLessons = {};
// let list = [lesson1, lesson2, lesson3];
// for (let i = 0; i < 3; i += 1) {
//     allLessons['lesson' + (i+1)] = list[i];
// }

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons)

const countStudents = (obj) => {
    let soma = 0;
    const chaves = Object.keys(allLessons);
    for (chave of chaves) {
        soma += obj[chave].numeroEstudantes;
    }
    return soma;
}

// console.log(countStudents(allLessons))

const getValueByNumber = (obj, index) => Object.values(obj)[index];

// console.log(getValueByNumber(lesson1, 0))

const verifyPair = (obj, key, value) => {
    let entradas = Object.entries(obj);
    for (let item of entradas) {
        if (item[0] === key && item[1] === value) {
            return true;
        }
    }
    return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));