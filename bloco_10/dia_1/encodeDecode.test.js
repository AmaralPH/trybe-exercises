const { encode, decode } = require('./encodeDecode.js');

describe('Codifica e decodifica strings', () => {
    it('Encode/decode são funções', () => {
        expect(typeof encode === 'function' && typeof decode === 'function').toBeTruthy();
    });
    it('Encode aeiou = 12345', () => {
        expect(encode('aeiou')).toBe('12345');
    });
    it('Decode 12345 = aeiou', () => {
        expect(decode('12345')).toBe('aeiou');
    });
    it('Outras letras não são alteradas no encode', () => {
        expect(encode('qwrty')).toBe('qwrty');
    });
    it('Outros números não são alterados no decode', () => {
        expect(decode('6789')).toBe('6789');
    });
    it('String retornada tem mesmo length que a passada no encode', () => {
        expect(encode('aeiou')).toHaveLength(5);
    });
    it('String retornada tem mesmo length que passada no decode', () => {
        expect(decode('12345')).toHaveLength(5);
    })
})