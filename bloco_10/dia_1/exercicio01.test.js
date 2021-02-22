const sum = require('./exercicio01.js');

describe('testa a função soma', () => {
    test('Função retorna 4 + 5 = 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
})