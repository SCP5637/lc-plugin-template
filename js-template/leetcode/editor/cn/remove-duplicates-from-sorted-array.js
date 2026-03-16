/*
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=30400
 *
 * [26] 删除有序数组中的重复项
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0 || nums.length === 1) {
        return nums.length;
    }
    if (nums.length === new Set(nums).size) return nums.length;
    // 原地删除
    let i = nums.length;
    while (i--) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */

