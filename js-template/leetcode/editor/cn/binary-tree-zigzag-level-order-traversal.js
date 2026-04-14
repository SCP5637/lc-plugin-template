/*
 * @lc app=leetcode.cn id=103 lang=javascript
 * @lcpr version=30403
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    let i = 0;
    // 额外需要记录层级
    let leveldepth = 0;

    while (i < queue.length) {
        const levelSize = queue.length - i;
        const level = [];

        for (let k = 0; k < levelSize; k++) {
            const node = queue[i++];
            if (leveldepth % 2 === 1) {
                level.unshift(node.val);
            } else {
                level.push(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        // if (leveldepth % 2 === 1) {
        //     level.reverse();
        // }

        res.push(level);
        leveldepth++;
    }

    return res;
};
// var levelOrder = function (root) {
//     // 层序遍历，典型BFS
//     if (!root) return [];
//     const res = [];
//     const queue = [root];
//     let i = 0;

//     while (i < queue.length) {
//         const levelSize = queue.length - i;
//         const level = [];

//         for (let k = 0; k < levelSize; k++) {
//             const node = queue[i++];
//             level.push(node.val);
//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }

//         res.push(level);
//     }

//     return res;
// };
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

