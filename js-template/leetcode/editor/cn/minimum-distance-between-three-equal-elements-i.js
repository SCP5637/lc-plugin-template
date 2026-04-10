/*
 * @lc app=leetcode.cn id=3740 lang=javascript
 * @lcpr version=30403
 *
 * [3740] 三个相等元素之间的最小距离 I
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    if(nums.length < 3) return -1;
    // 存储每个数字出现的下标
    let numIndices = new Map();
    let minDistance = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        if (!numIndices.has(nums[i])) {
            numIndices.set(nums[i], []);
        }
        numIndices.get(nums[i]).push(i);
        
        // 当某个数字出现次数达到3次时，计算最小距离
        let indices = numIndices.get(nums[i]);
        if (indices.length >= 3) {
            // 计算最近三个下标的两两距离之和
            let a = indices[indices.length - 3];
            let b = indices[indices.length - 2];
            let c = indices[indices.length - 1];
            let distance = (b - a) + (c - b) + (c - a);
            minDistance = Math.min(minDistance, distance);
        }
    }
    
    return minDistance === Infinity ? -1 : minDistance;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,1,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,3,2,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

