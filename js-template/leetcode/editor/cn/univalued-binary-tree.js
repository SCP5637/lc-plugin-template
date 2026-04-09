/*
 * @lc app=leetcode.cn id=965 lang=javascript
 * @lcpr version=30403
 *
 * [965] 单值二叉树
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if (!root) return true;
    
    const val = root.val;
    
    if (root.left && root.left.val !== val) return false;
    if (root.right && root.right.val !== val) return false;
    
    return isUnivalTree(root.left) && isUnivalTree(root.right);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,1,1,1,1,null,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,5,2]\n
// @lcpr case=end

 */

