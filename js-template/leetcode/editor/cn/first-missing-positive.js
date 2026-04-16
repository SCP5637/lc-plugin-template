/*
 * @lc app=leetcode.cn id=41 lang=javascript
 * @lcpr version=30403
 *
 * [41] 缺失的第一个正数
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;
    // 原地哈希索引，把数放在本来应该在的位置上

    // 第一步：索引置换
    // 将每个数放到正确的位置：数字 x 应该放在索引 x-1 处
    for (let i = 0; i < n; i++) {
        // 循环交换：当前数在有效范围内，且不在正确位置时才交换
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // 交换 nums[i] 和 nums[nums[i] - 1]
            const correctIdx = nums[i] - 1;
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
        }
    }
    
    // 第二步：寻找第一个位置不正确的索引
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    
    // 如果都正确，说明缺失的是 n+1
    return n + 1;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,0]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,-1,1]\n
// @lcpr case=end

// @lcpr case=start
// [7,8,9,11,12]\n
// @lcpr case=end

 */

