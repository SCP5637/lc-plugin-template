/*
 * @lc app=leetcode.cn id=1848 lang=javascript
 * @lcpr version=30403
 *
 * [1848] 到目标元素的最小距离
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let minDistance = 0;
    while(nums[start + minDistance] != target && nums[start - minDistance] != target) {
        minDistance++;
    }
    return minDistance;
};
// var getMinDistance = function(nums, target, start) {
//     // 把这个数组看作一颗二叉树，然后求出start节点到所有target值节点的最短距离
//     // 树的左节点就是start下标--，右节点就是start下标++，据此可以递归
    
//     if (nums[start] === target) {
//         return 0;
//     }
    
//     function search(current, direction) {
//         if (current < 0 || current >= nums.length) {
//             return Infinity;
//         }
//         if (nums[current] === target) {
//             return Math.abs(current - start);
//         }
//         if (direction === 'left') {
//             return search(current - 1, 'left');
//         } else {
//             return search(current + 1, 'right');
//         }
//     }
    
//     const leftDistance = search(start - 1, 'left');
//     const rightDistance = search(start + 1, 'right');
    
//     return Math.min(leftDistance, rightDistance);
// };
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,4,5]\n5\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n0\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,1,1,1,1,1,1,1]\n1\n0\n
// @lcpr case=end

 */

