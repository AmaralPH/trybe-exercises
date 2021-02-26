const getRepos = require('./getRepos.js');

describe('Testa a função getRepos', () => {
    it('procura o item sd-01-week4-5-project-todo-list', () => {
        expect.assertions(1);
        return getRepos('https://api.github.com/orgs/tryber/repos').
            then(lista => expect(lista.indexOf('sd-01-week4-5-project-todo-list') !== -1).
            toBe(true));
    });
    it('procura o item sd-01-week4-5-project-meme-generator', async () => {
        expect.assertions(1);
        const lista = await getRepos('https://api.github.com/orgs/tryber/repos');
        return expect(lista.indexOf('sd-01-week4-5-project-meme-generator') !== -1).toBe(true);
    })
})