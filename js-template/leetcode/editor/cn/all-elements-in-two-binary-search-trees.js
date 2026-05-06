/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 * @lcpr version=30403
 *
 * [1305] 两棵二叉搜索树中的所有元素
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    // 中序遍历获取有序数组
    const inorder = (root, arr) => {
        if (!root) return;
        inorder(root.left, arr);
        arr.push(root.val);
        inorder(root.right, arr);
    };
    
    const arr1 = [], arr2 = [];
    inorder(root1, arr1);
    inorder(root2, arr2);
    
    // 双指针合并两个有序数组
    const result = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    // 处理剩余元素
    while (i < arr1.length) result.push(arr1[i++]);
    while (j < arr2.length) result.push(arr2[j++]);
    
    return result;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [2,1,4]\n[1,0,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,8]\n[8,1]\n
// @lcpr case=end

 */

