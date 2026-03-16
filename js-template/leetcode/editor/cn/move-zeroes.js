/*
 * @lc app=leetcode.cn id=283 lang=javascript
 * @lcpr version=30400
 *
 * [283] 移动零
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length <= 1) return nums;
    let slow = 0;
    // 依旧快慢指针一边读一边写，最后末尾补上被移除的0
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    for (let i = slow; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [0,1,0,3,12]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

