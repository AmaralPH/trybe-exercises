const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
      setTimeout(() => {
        const animal = Animals.find((animal) => animal.name === name);
        if (animal) {
            return resolve(animal);
        }
        return reject('Nenhum animal com esse nome!');
      }, 100);
  })
);

const getAnimal = (name) => {
    // Adicione o código aqui.
    return findAnimalByName(name).then(obj => obj);
  };

const filterAnimalsByAge = (age) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const animalList = Animals.filter((animal) => animal.age === age);
            if (animalList.length > 0) {
                return resolve(animalList);
            }
            return reject('Nenhum animal com essa idade!');
        }, 100)
    })
)

const getAnimalsByAge = (age) => {
    return filterAnimalsByAge(age).then(list => list);
}

module.exports = { getAnimal, getAnimalsByAge };