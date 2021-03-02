const { expect } = require('@jest/globals');
const changeString = require('./changeString.js');
jest.mock('./changeString.js');

describe('Testa funções de string usando mocks', () => {
    describe('Item 4, faz novas implementações', () => {
        test('uppercase passa a minimizar letras', () => {
            changeString.uppercase.mockImplementation((string) => string.toLowerCase());

            expect(changeString.uppercase('OI TUDO BOM?')).toBe('oi tudo bom?');
            expect(changeString.uppercase).toHaveBeenCalled();
            expect(changeString.uppercase).toHaveBeenCalledTimes(1);
            expect(changeString.uppercase).toHaveBeenCalledWith('OI TUDO BOM?');
        });
        test('fistLetter passa a retornar ultima letra', () => {
            changeString.firstLetter.mockImplementation((str) => str[str.length-1]);

            expect(changeString.firstLetter('ABCDEF')).toBe('F');
            expect(changeString.firstLetter).toHaveBeenCalled();
            expect(changeString.firstLetter).toHaveBeenCalledTimes(1);
            expect(changeString.firstLetter).toHaveBeenCalledWith('ABCDEF');
        });
        test('concatenate passa a concatenar 3 strings ao inves de 2', () => {
            changeString.concatenate.mockImplementation((a, b, c) => a + b + c);

            expect(changeString.concatenate('Oi ', 'tudo ', 'bom?')).toBe('Oi tudo bom?');
            expect(changeString.concatenate).toHaveBeenCalled();
            expect(changeString.concatenate).toHaveBeenCalledTimes(1);
            expect(changeString.concatenate).toHaveBeenCalledWith('Oi ', 'tudo ', 'bom?');
        });
    });
    describe('Item 5, mocka primeira função pra minimizar letras', () => {
        test('testa função mockada e restaura original', () => {
            const minimiza = jest.
                spyOn(changeString, 'uppercase').
                mockImplementation((str) => str.toLowerCase());

            expect(changeString.uppercase('TRYBER')).toBe('tryber');
            expect(changeString.uppercase).toHaveBeenCalled();
            expect(changeString.uppercase).toHaveBeenCalledTimes(2);
            expect(changeString.uppercase).toHaveBeenCalledWith('TRYBER');

            changeString.uppercase.mockRestore();
            changeString.uppercase.mockImplementation((str) => str.toUpperCase());
            expect(changeString.uppercase('tryber')).toBe('TRYBER');
            expect(changeString.uppercase).toHaveBeenCalled();
            expect(changeString.uppercase).toHaveBeenCalledTimes(1);
            expect(changeString.uppercase).toHaveBeenCalledWith('tryber');
        });
    })
});