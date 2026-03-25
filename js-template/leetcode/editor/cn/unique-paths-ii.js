/*
 * @lc app=leetcode.cn id=63 lang=javascript
 * @lcpr version=30401
 *
 * [63] 不同路径 II
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // 本质和#62相同，只是在dp过程中需要判断是否有障碍物，即if (obstacleGrid[i][j]) continue;不可选的方向，则跳过这个选择去看下一个选择
    // let dp = new Array(obstacleGrid.length).fill(0).map(()=>new Array(obstacleGrid[0].length).fill(0));
    // dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    // for (let i = 0; i < obstacleGrid.length; i++) {
    //     for (let j = 0; j < obstacleGrid[0].length; j++) {
    //         if (obstacleGrid[i][j]) continue;
    //         if (i === 0 && j === 0) continue;
    //         dp[i][j] = (i > 0 ? dp[i - 1][j] : 0) + (j > 0 ? dp[i][j - 1] : 0);
    //     }
    // }
    // return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];

    // 但是上面这样写实际上还能有优化，比如这里只用1维dp
    // 因为dp[j]只和dp[j-1]有关，所以可以只用1维dp，想想看这是为什么
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(n).fill(0);
    dp[0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j]) {
                dp[j] = 0;
            } else if (j > 0) {
                dp[j] += dp[j - 1];
            }
        }
    }
    return dp[n - 1];
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [[0,0,0],[0,1,0],[0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1],[0,0]]\n
// @lcpr case=end

 */

