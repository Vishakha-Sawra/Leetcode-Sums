// Convert a number to binary 
// num = 5

var convertToBinary = function (num) {
    if (num === 0) return '0';

    let res = '';
    while (num > 1) {
        res += num % 2;
        num = Math.floor(num / 2);
    }
    res += num;
    return res.split('').reverse().join('');
}