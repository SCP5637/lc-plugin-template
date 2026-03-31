/*
 * @lc app=leetcode.cn id=700 lang=javascript
 * @lcpr version=30401
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (!root) {
        return null;
    }
    if (root.val === val) {
        return root;;
    }
    if (root.val > val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [4,2,7,1,3]\n2\n
// @lcpr case=end

// @lcpr case=start
// [4,2,7,1,3]\n5\n
// @lcpr case=end

 */

