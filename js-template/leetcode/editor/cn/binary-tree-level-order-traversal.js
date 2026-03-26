/*
 * @lc app=leetcode.cn id=102 lang=javascript
 * @lcpr version=30401
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
    // 层序遍历，典型BFS
    if (!root) return [];
    const res = [];
    const queue = [root];
    let i = 0;

    while (i < queue.length) {
        const levelSize = queue.length - i;
        const level = [];

        for (let k = 0; k < levelSize; k++) {
            const node = queue[i++];
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        res.push(level);
    }

    return res;
};
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

