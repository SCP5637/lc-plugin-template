/*
 * @lc app=leetcode.cn id=45 lang=javascript
 * @lcpr version=30402
 *
 * [45] 跳跃游戏 II
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function(nums) {
//     let dp = new Array(nums.length + 1).fill(Infinity);
//     dp[0] = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (dp[i] !== Infinity) {
//             for (let j = 1; j <= nums[i]; j++) {
//                 dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
//             }
//         }
//     }
//     return dp[nums.length - 1];
// };
var jump = function(nums) {
    if (nums.length === 1) return 0;
    
    let jumps = 0;           // 跳跃次数
    let currentEnd = 0;      // 当前这一跳能到达的最远位置
    let farthest = 0;        // 下一跳能到达的最远位置
    
    for (let i = 0; i < nums.length - 1; i++) {
        // 更新下一跳能到达的最远位置
        farthest = Math.max(farthest, i + nums[i]);
        
        // 到达当前跳的边界，必须进行下一跳
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }
    
    return jumps;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,0,1,4]\n
// @lcpr case=end

 */

