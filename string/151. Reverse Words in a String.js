// 151. Reverse Words in a String

var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};

// Optimal Solution:

var reverseWords = function (s) {
    let result = '';
    let word = '';
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' && word) {
            result += word + ' ';
            word = '';
        } else if (s[i] !== ' ') {
            word = s[i] + word;
        }
    }
    return (word ? result + word : result).trim();
};


// Avoid using trim() and split() functions:

function reverseWords(s) {
    let result = '';
    let word = '';
    let space = ' ';

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            word = s[i] + word;
        } else if (word) {
            result = result ? result + space + word : word;
            word = '';
        }
    }

    if (word) {
        result = result ? result + space + word : word;
    }

    return result;
}