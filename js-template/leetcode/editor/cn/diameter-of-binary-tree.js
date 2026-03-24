/*
 * @lc app=leetcode.cn id=543 lang=javascript
 * @lcpr version=30401
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
    let ans = 0;
    function depth(node) {
        if (node == null) return 0;
        const l = depth(node.left);
        const r = depth(node.right);
        ans = Math.max(ans, l + r);
        return Math.max(l, r) + 1;
    }
    depth(root);
    return ans;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */

