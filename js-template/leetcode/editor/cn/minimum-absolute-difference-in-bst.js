/*
 * @lc app=leetcode.cn id=530 lang=javascript
 * @lcpr version=30403
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
    // 对每一个节点检查根-左，右-根，求最小差
    // 最小值只可能是1，如果出现了差值1那么直接return1并结束操作
    let min = Infinity;
    let pre = null;
    // 中序遍历，检查每个节点的差值
    function traverse(node) {
        if (!node || min === 1) return;  // 提前终止
        traverse(node.left);
        if (pre) {
            min = Math.min(min, node.val - pre.val);
        }
        pre = node;
        traverse(node.right);
    }
    traverse(root);
    return min;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [4,2,6,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,48,null,null,12,49]\n
// @lcpr case=end

 */

