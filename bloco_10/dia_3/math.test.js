const { test, expect } = require('@jest/globals');
const math = require('./math');

describe('Faz testes usando mock', () => {
    test('Mocka a função subtrair', () => {
        math.subtrair = jest.fn();

        math.subtrair(3, 2);

        expect(math.subtrair).toHaveBeenCalled();
        expect(math.subtrair).toHaveBeenCalledTimes(1);
        // expect(math.subtrair(3, 2)).toBe(1);
    });

    test('Mocka a função multiplicar fixando o retorno 10', () => {
        math.multiplicar = jest.fn().mockReturnValue(10);

        math.multiplicar(3, 4);
        math.multiplicar(2, 5);

        expect(math.multiplicar).toHaveBeenCalled();
        expect(math.multiplicar(3, 2)).toBe(10);
        expect(math.multiplicar(10, 132)).toBe(10);
    });

    test('Mocka a função somar com uma implementação de soma', () => {
        math.somar = jest.fn().mockImplementation((a, b) => a + b);

        math.somar(1, 2);

        expect(math.somar).toHaveBeenCalled();
        expect(math.somar).toHaveBeenCalledTimes(1);
        expect(math.somar(1, 2)).toBe(3);
        expect(math.somar).toHaveBeenCalledWith(1, 2);
    });

    test('Mocka a função dividir, testa retorno padrão 15, 2 e 5', () => {
        math.dividir = jest.fn().mockReturnValue(15);

        math.dividir.mockReturnValueOnce(2);
        expect(math.dividir(4, 2)).toBe(2);  // testa retorno 1

        math.dividir.mockReturnValueOnce(5);
        expect(math.dividir(10, 2)).toBe(5); // testa retorno 2

        expect(math.dividir).toHaveBeenCalled(); // testa a chamada
        expect(math.dividir).toHaveBeenCalledWith(4, 2); // testa parametros 1
        expect(math.dividir).toHaveBeenCalledWith(10,2); // testa parametros 2
        expect(math.dividir).toHaveBeenCalledTimes(2); // testa numero de chamadas

        expect(math.dividir(1, 2)).toBe(15); // testa se voltou ao primeiro mock
    });
    test('Mocka a função subtrair e testa restauração', () => {
        math.subtrair = jest.spyOn(math, 'subtrair').mockReturnValue(20);

        math.subtrair(10, 5);

        expect(math.subtrair).toHaveBeenCalled();
        expect(math.subtrair(10, 5)).toBe(20);
        expect(math.subtrair).toHaveBeenCalledTimes(3);

        math.subtrair.mockRestore();
        math.subtrair.mockImplementation((a, b) => a - b);
        expect(math.subtrair(10, 5)).toBe(5);
    })
})