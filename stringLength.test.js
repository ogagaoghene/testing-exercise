const stringLength = require('./stringLength');

describe('stringLength(str)', () => {
    it('returns empty string when str is null', () => {
        expect(stringLength('')).toBe(0);
    });

    it('returns valid string for at least one or maximum of 10 characters', () => {
        expect(stringLength('h')).toBe(1);
        expect(stringLength('hel')).toBe(3);
        expect(stringLength('helloworld')).toBe(10);
    });

    it('returns string is more than 10 characters', () => {
        expect(stringLength('helloworld!')).toBe(11);
    });
});