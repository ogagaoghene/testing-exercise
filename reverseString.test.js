const reverseString = require('./reverseString');

describe('reverseString()', () => {
    it('return reversed string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
});