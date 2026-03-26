/*
 * @lc app=leetcode.cn id=98 lang=javascript
 * @lcpr version=30401
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    // 典型dfs递归
    function dfs(root, min, max) {
        if (!root) return true;
        // 对节点本身递归检查，这里检查节点是否符合当前范围下的最大最小值
        if (root.val <= min || root.val >= max) return false;
        // 当前节点检查通过，取节点值作为最大最小值给左右节点递归
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
    }
    // 取足够大的数值范围启动
    return dfs(root, -Infinity, Infinity);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,4,null,null,3,6]\n
// @lcpr case=end

 */

