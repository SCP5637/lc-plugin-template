/*
 * @lc app=leetcode.cn id=113 lang=javascript
 * @lcpr version=30401
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const res = [];
    const path = [];
    const dfs = (node, remain) => {
        if (!node) return;
        path.push(node.val);
        const next = remain - node.val;
        if (!node.left && !node.right && next === 0) {
            res.push(path.slice());
        } else {
            if (node.left) dfs(node.left, next);
            if (node.right) dfs(node.right, next);
        }
        path.pop();
    };
    dfs(root, targetSum);
    return res;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [5,4,8,11,null,13,4,7,2,null,null,5,1]\n22\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

 */

