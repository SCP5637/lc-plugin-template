/*
 * @lc app=leetcode.cn id=27 lang=javascript
 * @lcpr version=30400
 *
 * [27] 移除元素
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    // 依旧原地删除，与#26并无本质区别
    // 核心思路即一个指针在前面跑，一个个读，作为读取端，后面一个指针作为写入端（操作端）
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [3,2,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2,2,3,0,4,2]\n2\n
// @lcpr case=end

 */

