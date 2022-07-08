const { sum, halo, calculate } = require('../src/index')

test('test sum function', () => {
    const result = sum('3', '5')
    expect(result).toBe('350')
});

test('test function halo', () => {
    const result = halo('rian', 24)
    expect(result).toBe(24)
})

test('test function calculate', () => {
    const result = calculate(2, 3, '+')
    expect(result).toBe(7)
})