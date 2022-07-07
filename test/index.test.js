const { sum, halo } = require('../src/index')

test('test sum function', () => {
    const result = sum('3', '5')
    expect(result).toBe('35')
});

test('test function halo', () => {
    const result = halo('rian', 24)
    expect(result).toBe(24)
})