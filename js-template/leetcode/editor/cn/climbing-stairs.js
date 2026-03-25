/*
 * @lc app=leetcode.cn id=70 lang=javascript
 * @lcpr version=30401
 *
 * [70] 爬楼梯
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     // if (n <= 0) return 1;
//     // if (n === 1) return 1;
//     // return climbStairs(n - 1) + climbStairs(n - 2);
//     // 简化之后发现依旧斐波那契数问题，递归模式，但上面这样写显然会重复计算太多导致超时，所以
//     if (n <= 1) return 1;
//     let first = 1, second = 1;
//     for (let i = 2; i <= n; i++) {
//         const third = first + second;
//         first = second;
//         second = third;
//     }
//     return second;
// };

var climbStairs = function (n) {
    const steps = [1, 2];
    // dp思维模式
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (const step of steps) {
            if (i - step >= 0) dp[i] += dp[i - step];
        }
    }

    return dp[n];
};

// @lc code=end

// your test code here





/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */

