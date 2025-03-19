function findOneSubsequence(arr, targetSum) {
  let n = arr.length;
  let result = [];

  function helper(index, ds, s) {
    if (s === targetSum) {
      result.push([...ds]); // Store the first valid subsequence
      return true; // Stop further recursion
    }
    if (index === n) return false; // Base case, reached the end

    // Pick the current element
    ds.push(arr[index]);
    if (helper(index + 1, ds, s + arr[index])) return true; // Stop if found
    ds.pop(); // Backtrack

    // Not pick the current element
    if (helper(index + 1, ds, s)) return true; // Stop if found

    return false; // No valid subsequence found
  }

  helper(0, [], 0);
  return result.length > 0 ? result[0] : []; // Return first found subsequence or empty
}


// Explicility define === true when needed

function findOneSubsequence(arr, targetSum) {
  let n = arr.length;
  let result = [];

  function helper(index, ds, s) {
    if (s === targetSum) {
      result.push([...ds]); 
      return true;
    }
    if (index === n) return false;

    ds.push(arr[index]);
    if (helper(index + 1, ds, s + arr[index]) === true) {
      return true;
    }

    ds.pop(); 

    if (helper(index + 1, ds, s) === true) {
      return true; 
    }
    return false; 
  }

  helper(0, [], 0);
  return result.length > 0 ? result[0] : [];
}


// Keep Sum as differenet variable


function findOneSubsequence(arr, targetSum) {
    let n = arr.length;
    let result = [];

    function helper(index, ds, s) {
        if (s === targetSum) { 
            result.push([...ds]); 
            return true;
        }
        if (index === n) return false;

        ds.push(arr[index]);
        s += arr[index]; 
        if (helper(index + 1, ds, s)) return true;
        ds.pop(); 
        s -= arr[index];

        if (helper(index + 1, ds, s)) return true; 

        return false; 
    }

    helper(0, [], 0);
    return result.length > 0 ? result[0] : []; 
}


// Example usage:
console.log(findOneSubsequence([1, 2, 3], 3));
// Output: [1, 2] or [3] (returns the first valid subsequence found)