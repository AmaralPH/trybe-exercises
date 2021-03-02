const { describe, test, expect } = require('@jest/globals');
const randNum = require('./randomNumber.js');

describe('Testa a função randomNumber', () => {
    describe('Item 1, testa func random 0-100', () => {
        test('mocka a função usando o valor padrão 10', () => {
            randNum.random = jest.fn().mockReturnValue(10);
    
            expect(randNum.random()).toBe(10);
            expect(randNum.random).toHaveBeenCalled();
            expect(randNum.random).toHaveBeenCalledTimes(2);
        });
    });
    describe('Item 2, cria nova implementação (divisão) uma unica vez', () => {
        test('divisão de 10 / 2 com função implementada', () => {
            randNum.random = jest.fn().mockImplementationOnce((a, b) => a / b);

            expect(randNum.random(10, 2)).toBe(5);
            expect(randNum.random).toHaveBeenCalled();
            expect(randNum.random).toHaveBeenCalledTimes(1);
            expect(randNum.random).toHaveBeenCalledWith(10, 2);
        });
    });
    describe('Item 3, mocka uma implementação que multiplica 3 numeros', () => {
        test('testa implementação nova, reimplementa pra multiplicar x*2', () => {
            randNum.random = jest.fn().mockImplementation((a, b, c) => a * b * c);

            expect(randNum.random(2, 3, 4)).toBe(24);
            expect(randNum.random).toHaveBeenCalled();
            expect(randNum.random).toHaveBeenCalledTimes(1);
            expect(randNum.random).toHaveBeenCalledWith(2, 3, 4);

            randNum.random.mockReset();
            randNum.random.mockImplementation((a) => a * 2);

            expect(randNum.random(10)).toBe(20);
        })
    })
})