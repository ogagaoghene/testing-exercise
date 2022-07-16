const greeting = require('./greeting');

describe('greeting()', () => {
  test('says Hello', () => {
    expect(greeting('jest')).toBe('Hello, jest!');
  });
});