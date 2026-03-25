/*
 * @lc app=leetcode.cn id=322 lang=javascript
 * @lcpr version=30401
 *
 * [322] 零钱兑换
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    // 从下往上找最优解，典型dp思路
    // 每次找最优解，就是找dp[i - coin] + 1，因为dp[i - coin]是最优解，
    // 所以dp[i] = dp[i - coin] + 1就是最优解
    for (let i = 0; i < dp.length; i++) {
        for (let coin of coins) {
            if (i - coin < 0) continue;
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    // 那么从上往下是什么呢，就像是找amount的最小答案 = (amount - 各类硬币值)的最小答案 + 1)
    // 例如amount = 100，coins = [1, 2, 5]
    // 那么dp[100] = Math.min(dp[99] + 1, dp[98] + 1, dp[95] + 1),典型递归
    return dp[amount] === amount + 1 ? -1 : dp[amount];
}
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [186,419,83,408]\n6249\n
// @lcpr case=end0

// @lcpr case=start
// [1000,3]\n4002\n
// @lcpr case=end

// @lcpr case=start
// [2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

 */

