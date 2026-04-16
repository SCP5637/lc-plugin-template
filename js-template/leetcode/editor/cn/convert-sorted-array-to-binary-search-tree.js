/*
 * @lc app=leetcode.cn id=108 lang=javascript
 * @lcpr version=30403
 *
 * [108] 将有序数组转换为二叉搜索树
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// var sortedArrayToBST = function(nums) {
//     // 利用BST性质，左小右大，递归构建
//     if (nums.length === 0) return null;
//     const mid = Math.floor(nums.length / 2);
//     const root = new TreeNode(nums[mid]);
//     root.left = sortedArrayToBST(nums.slice(0, mid));
//     root.right = sortedArrayToBST(nums.slice(mid + 1));
//     return root;
// };
var sortedArrayToBST = function(nums) {
    // 优化:使用索引，避免使用 slice 创建新数组
    const build = (left, right) => {
        if (left > right) return null;
        const mid = left + Math.floor((right - left) / 2);  // 防溢出写法
        const root = new TreeNode(nums[mid]);
        root.left = build(left, mid - 1);
        root.right = build(mid + 1, right);
        return root;
    };
    return build(0, nums.length - 1);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [-10,-3,0,5,9]\n
// @lcpr case=end

// @lcpr case=start
// [1,3]\n
// @lcpr case=end

 */

