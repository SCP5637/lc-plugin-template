/*
 * @lc app=leetcode.cn id=94 lang=javascript
 * @lcpr version=30401
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     return root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : [];
// };
var inorderTraversal = function(root) { 
    let ans = [];
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        ans.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return ans;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,null,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,null,8,null,null,6,7,9]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

