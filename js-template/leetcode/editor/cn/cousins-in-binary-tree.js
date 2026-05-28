/*
 * @lc app=leetcode.cn id=993 lang=javascript
 * @lcpr version=30403
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xDepth = -1, yDepth = -1;
    let xParent = null, yParent = null;
    
    function dfs(node, depth, parent) {
        if (!node) return;
        
        if (node.val === x) {
            xDepth = depth;
            xParent = parent;
        }
        if (node.val === y) {
            yDepth = depth;
            yParent = parent;
        }
        
        if (xDepth !== -1 && yDepth !== -1) return;
        
        dfs(node.left, depth + 1, node);
        dfs(node.right, depth + 1, node);
    }
    
    dfs(root, 0, null);
    
    return xDepth === yDepth && xParent !== yParent;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,4]\n4\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,null,4,null,5]\n5\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,null,4]\n2\n3\n
// @lcpr case=end

 */

