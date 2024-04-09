// 67. Add Binary
// a = '11', b = '1'

var addBinary = function(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if (i >= 0) {
            sum += parseInt(a[i--]); // convert string to number using parseInt function. why a[i--]? because we are iterating from the end of the string to the start. So basically we are hust converting the string to number and adding it to the sum.
        }
        if (j >= 0) {
            sum += parseInt(b[j--]);
        }
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }ˀ
    return result;
}

// After potentially adding the bits from a and b to sum, the remainder of sum divided by 2 (which will be either 0 or 1) is prepended to result. This is because in binary addition, if the sum is 2, the result bit is 0 and a carry of 1 is generated. If the sum is 1 or 0, the result bit is 1 or 0 respectively, with no carry. 
// The carry for the next iteration is then calculated as the floor of sum divided by 2. This will be 1 if sum was 2, and 0 otherwise.