/*
 * @lc app=leetcode.cn id=99 lang=javascript
 * @lcpr version=30401
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    // 利用 BST 的性质：对 BST 做中序遍历应得到严格升序序列
    // 此处维护一个prev，当出现 prev.val > curr.val 时，第一次逆序记录 first = prev
    // 每次逆序更新 second = curr 遍历结束后交换 first 与 second 的值，此为O(1)解法
    // 更直观的就是遍历完写出一个数组，检查数组导致不严格升序的节点进行对换，就是O(n)了
    let first = null, second = null, prev = null;
    const inorder = (node) => {
        if (!node) return;
        inorder(node.left);
        if (prev && prev.val > node.val) {
            if (!first) first = prev;
            second = node;
        }
        prev = node;
        inorder(node.right);
    };
    inorder(root);
    if (first && second) {
        const t = first.val;
        first.val = second.val;
        second.val = t;
    }
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,3,null,null,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,1,4,null,null,2]\n
// @lcpr case=end

 */

