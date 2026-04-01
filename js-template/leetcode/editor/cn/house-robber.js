/*
 * @lc app=leetcode.cn id=198 lang=javascript
 * @lcpr version=30401
 *
 * [198] 打家劫舍
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array(nums.length + 1);
    dp[0] = 0;
    dp[1] = nums[0];
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }
    return dp[nums.length];
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,9,3,1]\n
// @lcpr case=end

 */

