const Calculator = require('./calculator');

describe('calculator class with basic arithmetic operations', () => {
    it('returns addition of 3 and 2 to equal 5', () => {
        let calc = new Calculator();
        expect(calc.add(3,2)).toBe(5);
    });

    it('returns subtraction of 3 and 2 to equal 1', () => {
        let calc = new Calculator();
        expect(calc.subtract(3,2)).toBe(1);
    });

    it('returns division of 3 and 2 to equal 1.5', () => {
        let calc = new Calculator();
        expect(calc.divide(3,2)).toBe(1.5);
    });

    it('returns multiplication of 3 and 2 equal 6', () => {
        let calc = new Calculator();
        expect(calc.multiply(3,2)).toBe(6);
    });

});
