/*
 * @lc app=leetcode.cn id=112 lang=javascript
 * @lcpr version=30401
 *
 * [112] 路径总和
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // BFS递归检查
    if (!root) return false;
    if (!root.left && !root.right) return root.val === targetSum;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

// var hasPathSum = function (root, targetSum) {
//     if (!root) return false;
//     // DFS迭代检查
//     const stack = [[root, targetSum]];
//     while (stack.length) {
//         const [node, sum] = stack.pop();
//         const remain = sum - node.val;

//         if (!node.left && !node.right && remain === 0) return true;

//         if (node.right) stack.push([node.right, remain]);
//         if (node.left) stack.push([node.left, remain]);
//     }
//     return false;
// };
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [5,4,8,11,null,13,4,7,2,null,null,null,1]\n22\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */

