/*
 * @lc app=leetcode.cn id=55 lang=javascript
 * @lcpr version=30402
 *
 * [55] 跳跃游戏
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//     if (nums.length === 1) return true;
//     let dp = new Array(nums.length + 1).fill(false);
//     dp[0] = true;
//     for (let i = 0; i < nums.length; i++) {
//         if (dp[i]) {
//             for (let j = 1; j <= nums[i]; j++) {
//                 dp[i + j] = true;
//             }
//         }
//     }
//     return dp[nums.length - 1];
// };
var canJump = function(nums) {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;  // 当前位置不可达
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= nums.length - 1) return true;  // 已经可以到达终点
    }
    return true;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1,0,4]\n
// @lcpr case=end

 */

