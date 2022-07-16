const capitalize = require('./capitalize');

describe('capitalize()', () => {
    it('return string with the first letter capitalized', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
});