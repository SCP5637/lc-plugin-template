/*
 * @lc app=leetcode.cn id=230 lang=javascript
 * @lcpr version=30402
 *
 * [230] 二叉搜索树中第 K 小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // 利用BST左小右大，中序遍历将会按从小到大输出
    let count = 0;
    let res = null;
    function traverse(node) {
        if (node === null) return;
        traverse(node.left);
        count++;
        if (count === k) {
            res = node.val;
            return;
        }
        traverse(node.right);
    }
    traverse(root);
    return res;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [3,1,4,null,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,null,1]\n3\n
// @lcpr case=end

 */

