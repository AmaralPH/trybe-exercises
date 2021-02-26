const getUserName = require('./getUserName.js');

describe('Testa a função getUserName', () => {
    describe('Testa usando sintaxe de promise', () => {
        it('usuário existe', () => {
            expect.assertions(1);
            return getUserName(4).then((data) => expect(data).toEqual('Mark'));
        });
        it('usuário não existe', () => {
            expect.assertions(1);
            return getUserName(7).catch((error) => expect(error).toEqual({ error: 'User with 7 not found.' }));
        });
    });
    describe('Testa usando sitaxe async/await', () => {
        it('usuário existe', async () => {
            expect.assertions(1);
            const data = await getUserName(5)
            return expect(data).toBe('Paul');
        });
        it('usuário não existe', async () => {
            try {
                await getUserName(9);
            } catch (error) {
                expect(error).toEqual({ error: 'User with 9 not found.' })
            }
        })
    })
})