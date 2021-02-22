const sum = require('./sum.js');

describe('Testa a função soma', () => {
    test('Função retorna 4 + 5 = 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    test('Funcção retorna 0 + 0 = 0', () => {
        expect(sum(0, 0)).toEqual(0);
    });
    test('Erro ao somar String e number', () => {
        expect(() => { sum(4, '5') }).toThrow();
    });
    test('Mensagem de erro "parameters must be numbers"', () => {
        expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
    });
})