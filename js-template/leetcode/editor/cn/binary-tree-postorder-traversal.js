/*
 * @lc app=leetcode.cn id=145 lang=javascript
 * @lcpr version=30401
 *
 * [145] 二叉树的后序遍历
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
// var postorderTraversal = function(root) {
//     // 拆解问题: 后序遍历 = 左子树 + 右子树 + 根节点
//     return root ? [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] : [];
// };
var postorderTraversal = function (root) {
    const res = [];
    // 优化写法，先前写的虽然极简，但是会反复对最初的数组进行 concat ，并且不难发现会导致出现很多的数组重复复制
    // 所以这种递归遍历最好是创建一个额外对象，把结果push到对象里，而不是直接在结果本身上递归
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);
        res.push(node.val);
    }
    dfs(root);
    return res;
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

