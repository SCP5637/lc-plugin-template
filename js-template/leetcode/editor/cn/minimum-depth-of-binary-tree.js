/*
 * @lc app=leetcode.cn id=111 lang=javascript
 * @lcpr version=30401
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
    // 递归找到最小并比较O(n)
    if (!root) return 0;
    if (!root.left) return 1 + minDepth(root.right);
    if (!root.right) return 1 + minDepth(root.left);
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

// var minDepth = function (root) {
//     // BFS O(n)
//     if (!root) return 0;
//     const queue = [root];
//     let i = 0;
//     let depth = 1;

//     while (i < queue.length) {
//         const levelSize = queue.length - i;

//         for (let k = 0; k < levelSize; k++) {
//             const node = queue[i++];
//             if (!node.left && !node.right) return depth;
//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }

//         depth++;
//     }

//     return depth;
// }
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [2,null,3,null,4,null,5,null,6]\n
// @lcpr case=end

 */

