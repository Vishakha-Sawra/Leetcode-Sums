// 1002. Find Common Characters

var commonChars = function (words) {
    const result = []
    const firstWord = [...words[0]]

    for (const letter of firstWord) {
        if (words.every(word => word.includes(letter))) {
            result.push(letter)
            words = words.map(word => word.replace(letter, ''))
        }
    }

    return result
};