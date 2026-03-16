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
    // 并非原地删除
    // if (nums.length === 0 || nums.length === 1) {
    //     return nums.length;
    // }
    // if (nums.length === new Set(nums).size) return nums.length;
    // let i = nums.length;
    // while (i--) {
    //     if (nums[i] === nums[i - 1]) {
    //         nums.splice(i, 1);
    //     }
    // }
    // return nums.length;

    if (nums.length <= 1) return nums.length;
    // 快慢指针原地删除
    let slow = 0;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
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

