const { expect, afterEach } = require('@jest/globals');
const service = require('./fetchDogs.js');

describe('Testa a função fetchDog', () => {
    service.fetchDog = jest.fn();
    afterEach(service.fetchDog.mockReset);

    test('Requisição teve sucesso', async () => {
        service.fetchDog.mockResolvedValue('request sucess');

        expect(service.fetchDog()).resolves.toBe('request sucess');
        expect(service.fetchDog).toHaveBeenCalled();
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
    });

    test('Requisição falhou', async () => {
        service.fetchDog.mockRejectedValue('request failed');
        
        expect(service.fetchDog()).rejects.toBe('request failed');
        expect(service.fetchDog).toHaveBeenCalled();
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
    });
})