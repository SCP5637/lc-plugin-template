/*
 * @lc app=leetcode.cn id=2078 lang=javascript
 * @lcpr version=30403
 *
 * [2078] 两栋颜色不同且距离最远的房子
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    const n = colors.length;
    
    let left = 0;
    let right = n - 1;
    while (colors[left] === colors[right]) {
        right--;
    }
    const dist1 = right - left;
    
    left = 0;
    right = n - 1;
    while (colors[left] === colors[right]) {
        left++;
    }
    const dist2 = right - left;
    
    return Math.max(dist1, dist2);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,1,1,6,1,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,8,3,8,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

 */

