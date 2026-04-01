/*
 * @lc app=leetcode.cn id=213 lang=javascript
 * @lcpr version=30401
 *
 * [213] 打家劫舍 II
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    function robRange(start, end) {
        let prev2 = 0; // dp[i-2]
        let prev1 = 0; // dp[i-1]
        for (let i = start; i <= end; i++) {
            const cur = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = cur;
        }
        return prev1;
    }

    return Math.max(robRange(0, n - 2), robRange(1, n - 1));
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [2,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */

