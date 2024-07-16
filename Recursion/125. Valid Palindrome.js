// 125. Valid Palindrome 

var isPalindrome = function (s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return helper(s, 0, s.length - 1);
};

function helper(s, left, right) {
    if (left >= right) {
        return true;
    }
    if (s[left] !== s[right]) {
        return false;
    }
    return helper(s, left + 1, right - 1);
}

// Time Complexity: O(n)
// Space Complexity: O(n)


// Functional 

function isPalindrome(s) {
    function cleanString(str) {
        return str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    }

    function checkPalindrome(str) {
        if (str.length <= 1) {
            return true;
        }
        if (str[0] !== str[str.length - 1]) {
            return false;
        }
        return checkPalindrome(str.slice(1, str.length - 1));
    }

    let cleanedStr = cleanString(s);
    return checkPalindrome(cleanedStr);
}

