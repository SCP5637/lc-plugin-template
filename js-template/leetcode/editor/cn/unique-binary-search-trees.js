/*
 * @lc app=leetcode.cn id=96 lang=javascript
 * @lcpr version=30401
 *
 * [96] 不同的二叉搜索树
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            // 这里的思路是，以j为根节点，那么左子树的节点数就是j-1，右子树的节点数就是i-j
            // 所以dp[i]就是左子树的节点数乘以右子树的节点数
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

