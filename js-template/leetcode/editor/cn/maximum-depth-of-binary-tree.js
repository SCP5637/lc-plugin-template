/*
 * @lc app=leetcode.cn id=104 lang=javascript
 * @lcpr version=30401
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
// var maxDepth = function(root) {
//     let depth = 0;
//     let ans = 0;
//     traverseR(root);
//     return ans;

//     // 遍历二叉树得出需要的数据的典型问题
//     function traverseR(node) {
//         if (node === null) return;
//         depth++;
//         if (node.left === null && node.right === null) {
//             ans = Math.max(ans, depth);
//         }
//         traverseR(node.left);
//         traverseR(node.right);
//         depth--;
//     }
// };
var maxDepth = function (root) {
    // 不依赖控制变量，直接返回，极简写法
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2]\n
// @lcpr case=end

 */

