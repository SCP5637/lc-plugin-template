/*
 * @lc app=leetcode.cn id=129 lang=javascript
 * @lcpr version=30403
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function(root) {
    // 先递归获得到从根节点到每一个子节点，递归时每多递一层数值就x10，最后返回所有路径数值的和
    if (!root) return 0;
    let sum = 0;
    function dfs(node, path) {
        if (!node) return;
        path = path * 10 + node.val;
        if (!node.left && !node.right) {
            sum += path;
            return;
        }
        dfs(node.left, path);
        dfs(node.right, path);
    }
    dfs(root, 0);
    return sum;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [4,9,0,5,1]\n
// @lcpr case=end

 */

