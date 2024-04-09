// Word Laddder

var ladderLength = function (beginWord, endWord, wordList) {
    const q = [[beginWord, 1]];

    const st = new Set(wordList);
    st.delete(beginWord);

    while (q.length > 0) {
        const [word, steps] = q.shift();
        if (word === endWord) {
            return steps;
        }

        for (let i = 0; i < word.length; i++) {
            const original = word[i];
            for (let ch = 'a'.charCodeAt(0); ch <= 'z'.charCodeAt(0); ch++) {
                word = word.substring(0, i) + String.fromCharCode(ch) + word.substring(i + 1);

                if (st.has(word)) {
                    st.delete(word);
                    q.push([word, steps + 1]);
                }
            }
            word = word.substring(0, i) + original + word.substring(i + 1);
        }
    }
    return 0;
}
