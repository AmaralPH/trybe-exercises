const uppercase = require('./uppercase.js');

describe('Testa a função uppercase', () => {
    it('transforma as lestras em maiuscula', () => {
        uppercase('cocacola', (str) => {
            expect(str).toBe('COCACOLA');
        })
    });
    it('transforma "picles" em "PICLES"', () => {
        uppercase('picles', (str) => {
            expect(str).toBe('PICLES');
        });
    });
})

