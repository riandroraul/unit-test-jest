function sum(a, b) {
    return a + b;
}

const halo = (nama, umur) => {
    return `halo ${nama} umur saya ${umur}`
}

const calculate = (nilai1, nilai2, opt) => {
    switch (opt) {
        case '+':
            return nilai1 + nilai2;
            break;
        case '*':
        case 'x':
        case 'X':
            return nilai1 * nilai2;
            break;
        case '-':
            return nilai1 - nilai2;
            break;
        case '/':
            return nilai1 / nilai2;
            break;
        default:
            return 'operator salah!';
            break;
    }
}

module.exports = { halo, sum, calculate }