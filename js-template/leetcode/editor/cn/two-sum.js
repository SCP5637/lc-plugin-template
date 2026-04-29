/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30400
 *
 * [1] 两数之和
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
};
// var twoSum = function(nums, target) {
//     // 双指针方案
//     // 保存原始下标，然后按值排序
//     const indexedNums = nums.map((val, idx) => ({ val, idx }));
//     indexedNums.sort((a, b) => a.val - b.val);
    
//     let left = 0, right = indexedNums.length - 1;
//     while (left < right) {
//         const sum = indexedNums[left].val + indexedNums[right].val;
//         if (sum === target) {
//             return [indexedNums[left].idx, indexedNums[right].idx];
//         } else if (sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return [];
// };
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */

