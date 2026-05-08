/*
 * @lc app=leetcode.cn id=486 lang=javascript
 * @lcpr version=30403
 *
 * [486] 预测赢家
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    // 典型的dp问题，先手可以控制自己拿到哪一部分
    const n = nums.length;
    // dp[i][j] 表示在区间 [i, j] 上，当前玩家能获得的最大分数差（当前玩家得分 - 对手得分）
    const dp = Array.from({length: n}, () => new Array(n).fill(0));
    
    // 初始化：只有一个数字时，分数差就是该数字本身
    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }
    
    // 按区间长度从小到大计算
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            // 取左边或取右边，选择能让分数差最大的
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }
    
    // 如果分数差大于等于0，说明先手可以获胜或平局
    return dp[0][n - 1] >= 0;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,5,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,5,233,7]\n
// @lcpr case=end

 */

