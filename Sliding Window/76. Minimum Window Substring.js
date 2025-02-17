// 76. Minimum Window Substring
// s = 'ddaaabbca', t = 'abc'
// Output: 'abbca'

// 1. Brute force - Generate all possible subarrays and check if they have the sum equal to the target sum - O(n) time, O(1) space where n is the length of the input array

var minWindow = function (s, t) {
  let minLen = Infinity;
  let minStart = 0;

  for (let i = 0; i < s.length; i++) {
    let map = {};
    for (let char of t) {
      map[char] = (map[char] || 0) + 1;
    }
    let count = Object.keys(map).length;

    for (let j = i; j < s.length; j++) {
      if (map[s[j]] !== undefined) {
        map[s[j]]--;
        if (map[s[j]] === 0) {
          count--;
        }
      }
      if (count === 0) {
        if (j - i + 1 < minLen) {
          minLen = j - i + 1;
          minStart = i;
        }
        break;
      }
    }
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen); // if minLen is still Infinity, return an empty string else return the substring from minStart to minStart + minLen
};

// Time complexity: O(n^2), where n is the length of the input string s.
// Space complexity: O(m), where m is the length of the input string t.

// 2. Sliding Window - O(n) time, O(1) space where n is the length of the input array

var minWindow = function (s, t) {
    let minLen = Infinity;
    let minStart = 0;
    let left = 0;
    let right = 0;
    let map = {};
    let count = 0;
  
    for (let i = 0; i < t.length; i++) {
      map[t[i]] = (map[t[i]] || 0) + 1;
    }
  
    while (right < s.length) {
      if (map[s[right]] > 0) {
        count++;
      }
      map[s[right]]--;
  
      while (count === t.length) {
        if (right - left + 1 < minLen) {
          minLen = right - left + 1;
          minStart = left;
        }
  
        map[s[left]]++;
        if (map[s[left]] > 0) {
          count--;
        }
        left++;
      }
      right++;
    }
  
    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
  };
  
