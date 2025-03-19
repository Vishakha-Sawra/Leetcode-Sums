// Frog Jump

// 1. Using Recursion

function main() {
  const height = [30, 10, 60, 10, 60, 50];
  const n = height.length;
  const dp = new Array(n).fill(-1);
  dp[0] = 0;

  for (let ind = 1; ind < n; ind++) {
    let jumpTwo = Infinity;
    let jumpOne = dp[ind - 1] + Math.abs(height[ind] - height[ind - 1]);
    if (ind > 1)
      jumpTwo = dp[ind - 2] + Math.abs(height[ind] - height[ind - 2]);

    dp[ind] = Math.min(jumpOne, jumpTwo);
  }

  console.log(dp[n - 1]);
}

main();

var canCross = function (stones) {
    let n = stones.length;
    let dp = new Array(stones.length).fill(-1);
    dp[0] = 0;
    for (let i = 1; i < n; i++) {
        let jumpTwo = Infinity;
        let jumpOne = dp[i - 1] + Math.abs(stones[i] - stones[i - 1]);
        if (i > 1) {
            jumpTwo = dp[i - 2] + Math.abs(stones[i] - stones[i - 2]);
        }
        dp[i] = Math.min(jumpOne, jumpTwo);
    }
    return dp[n - 1];
};
