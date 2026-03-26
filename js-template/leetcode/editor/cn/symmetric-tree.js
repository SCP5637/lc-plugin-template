/*
 * @lc app=leetcode.cn id=101 lang=javascript
 * @lcpr version=30401
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
    // 递归思路
    if (!root) return true;
    function checkSymmetry(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        // 成对比较，镜像成对递归
        return left.val === right.val && checkSymmetry(left.left, right.right) && checkSymmetry(left.right, right.left);
    };
    return checkSymmetry(root.left, root.right);
};

// var isSymmetric = function(root) {
//     // 迭代遍历思路
//     if (!root) return true;
//     let currentPick = [root.left, root.right];
//     while(currentPick.length){
//         let left = currentPick.shift(), right = currentPick.shift();
//         if (!left && !right) continue;
//         if (!left || !right) return false;
//         if (left.val !== right.val) return false;
//         currentPick.push(left.left, right.right, left.right, right.left);
//     }
//     return true;
// };

// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,2,3,4,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,null,3,null,3]\n
// @lcpr case=end

 */

