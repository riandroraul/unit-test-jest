const { sum } = require('../src/index')

test('test sum function', () => {
    const result = sum(3, 5)
    expect(result).toBe(8)
});