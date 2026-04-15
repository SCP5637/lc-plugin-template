/*
 * @lc app=leetcode.cn id=42 lang=javascript
 * @lcpr version=30403
 *
 * [42] 接雨水
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     // 核心的dp思想，找两边最大值关注每一列能存多少
//     const n = height.length;
//     if (n === 0) return 0;
    
//     // leftMax[i] 表示第 i 列左边（包括自己）的最大高度
//     let leftMax = Array(n).fill(0);
//     leftMax[0] = height[0];
//     for (let i = 1; i < n; i++) {
//         leftMax[i] = Math.max(leftMax[i - 1], height[i]);
//     }
    
//     // rightMax[i] 表示第 i 列右边（包括自己）的最大高度
//     let rightMax = Array(n).fill(0);
//     rightMax[n - 1] = height[n - 1];
//     for (let i = n - 2; i >= 0; i--) {
//         rightMax[i] = Math.max(rightMax[i + 1], height[i]);
//     }
    
//     // 计算每一列能接的雨水量
//     let res = 0;
//     for (let i = 0; i < n; i++) {
//         // 当前列能接的雨水 = min(左边最高, 右边最高) - 当前高度
//         res += Math.min(leftMax[i], rightMax[i]) - height[i];
//     }
    
//     return res;
// };
var trap = function(height) {
    // 优化后使用双指针，因为对于每个列也确实只需要关注左右两边的最值而无需创立最大数组专门存
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let res = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            // 左边较低，左边的水量由 leftMax 决定
            if (height[left] >= leftMax) {
                leftMax = height[left];  // 更新左边最高
            } else {
                res += leftMax - height[left];  // 可以接雨水
            }
            left++;
        } else {
            // 右边较低或相等，右边的水量由 rightMax 决定
            if (height[right] >= rightMax) {
                rightMax = height[right];  // 更新右边最高
            } else {
                res += rightMax - height[right];  // 可以接雨水
            }
            right--;
        }
    }
    
    return res;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end

 */

