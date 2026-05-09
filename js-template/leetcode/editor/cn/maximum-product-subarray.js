/*
 * @lc app=leetcode.cn id=152 lang=javascript
 * @lcpr version=30403
 *
 * [152] 乘积最大子数组
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//     let dpMax = new Array(nums.length);
//     let dpMin = new Array(nums.length);
//     dpMax[0] = dpMin[0] = nums[0];
//     let max = nums[0];
    
//     for(let i = 1; i < nums.length; i++){
//         // 当前数是正数：max×num 最大，min×num 最小
//         // 当前数是负数：min×num 最大，max×num 最小
//         dpMax[i] = Math.max(dpMax[i-1] * nums[i], dpMin[i-1] * nums[i], nums[i]);
//         dpMin[i] = Math.min(dpMax[i-1] * nums[i], dpMin[i-1] * nums[i], nums[i]);
//         max = Math.max(max, dpMax[i]);
//     }
//     return max;
// };
var maxProduct = function(nums) {
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        let temp = maxProd;
        maxProd = Math.max(maxProd * nums[i], minProd * nums[i], nums[i]);
        minProd = Math.min(temp * nums[i], minProd * nums[i], nums[i]);
        result = Math.max(result, maxProd);
    }
    return result;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [2,3,-2,4]\n
// @lcpr case=end

// @lcpr case=start
// [-2,3,-1]\n
// @lcpr case=end

 */

