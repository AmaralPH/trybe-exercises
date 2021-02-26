const { getAnimal, getAnimalsByAge } = require('./getAnimalByName');
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - getAnimalsByAge', () => {
  test('Retorna lista de animais', () => {
    expect.assertions(1);
    return expect(getAnimalsByAge(1)).resolves.toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }])
  })

  describe('Quando não existe animal com a idade', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalsByAge(50).catch(error => expect(error).toBe('Nenhum animal com essa idade!'));
    })
  })
})