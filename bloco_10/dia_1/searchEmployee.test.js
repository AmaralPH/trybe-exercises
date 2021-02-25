const searchEmployee = require('./searchEmployee');

describe('Testa a função searchEmployee', () => {
    it('Testa se a função searchEmployee é definida', () => {
        expect(searchEmployee).toBeDefined();
    });
    it('Testa se searchEmplyee é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    it('Testa função recebendo param (1256-4, lastName) retorna Bezos', () => {
        expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
    });
    it('Testa se retorna "Informação indisponível" ao passar detail inválido', () => {
        expect(searchEmployee('1256-4', 'abacaxi')).toBe('Informação indisponível');
    });
    it('Testa se retorna "ID não identificada" ao passar id inexistente', () => {
        expect(searchEmployee('xxxxx', 'lastName')).toBe('ID não identificada');
    });
})