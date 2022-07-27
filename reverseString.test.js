const reverseString = require('./reverseString');

describe('reverseString()', () => {
    it('returns reversed string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
});
