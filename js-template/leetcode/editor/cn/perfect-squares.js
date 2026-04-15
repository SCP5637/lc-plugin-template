/*
 * @lc app=leetcode.cn id=279 lang=javascript
 * @lcpr version=30403
 *
 * [279] 完全平方数
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var numSquares = function(n) {
//     // 常规dp或者bfs操作
//     let dp = new Array(n + 1).fill(0);
//     for (let i = 1; i <= n; i++) {
//         dp[i] = i;
//     }
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j * j <= i; j++) {
//             dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
//         }
//     }
//     return dp[n];
// };

var numSquares = function(n) {
    //拉格朗日四平方定理指出：任何正整数都可以表示为 最多4个 完全平方数之和。
    // 判断是否为完全平方数
    const isSquare = (x) => {
        const s = Math.floor(Math.sqrt(x));
        return s * s === x;
    };
    
    // 情况1：本身就是完全平方数
    if (isSquare(n)) return 1;
    
    // 情况2：可以表示为两个完全平方数之和
    for (let i = 1; i * i <= n; i++) {
        if (isSquare(n - i * i)) return 2;
    }
    
    // 情况3：可以表示为四个完全平方数之和（形如 4^a * (8b + 7)）
    while (n % 4 === 0) {
        n /= 4;
    }
    if (n % 8 === 7) return 4;
    
    // 情况4：只能是三个完全平方数之和
    return 3;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 12\n
// @lcpr case=end

// @lcpr case=start
// 13\n
// @lcpr case=end

 */

