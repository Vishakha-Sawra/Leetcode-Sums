// 451. Sort Characters By Frequency
// s = "tree", return "eert"

// Brute Force Solution
var frequencySort = function (s) {
    const frequency = {};
    for (let char of s) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    const sortedChars = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);

    let result = '';
    for (let char of sortedChars) {
        result += char.repeat(frequency[char]);
    }

    return result;
}

// Time Complexity: O(nlogn) 
// Space Complexity: O(n)

// Optimized Solution
// Bucket Sort

var frequencySort = function (s) {
    const freqMap = new Map();
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const maxFreq = Math.max(...freqMap.values());
    const buckets = Array.from({ length: maxFreq + 1 }, () => []);

    for (let [char, freq] of freqMap) {
        buckets[freq].push(char);
    }

    let result = '';
    for (let i = buckets.length - 1; i > 0; i--) {
        for (let char of buckets[i]) {
            result += char.repeat(i);
        }
    }

    return result;
};
