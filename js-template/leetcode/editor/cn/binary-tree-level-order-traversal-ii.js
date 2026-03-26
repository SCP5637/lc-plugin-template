/*
 * @lc app=leetcode.cn id=107 lang=javascript
 * @lcpr version=30401
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    while (queue.length) {
        let level = [];
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (node) {
                level.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        if (level.length) res.unshift(level);
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

