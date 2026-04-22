/*
 * @lc app=leetcode.cn id=958 lang=javascript
 * @lcpr version=30403
 *
 * [958] 二叉树的完全性检验
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
var isCompleteTree = function(root) {
    if (!root) return true;
    
    const queue = [root];
    let reachedNull = false;  // 标记是否遇到空节点
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (!node) {
            reachedNull = true;
        } else {
            if (reachedNull) {
                return false;
            }
            // 左右子节点都入队（包括null）,实际类似于某种递归遍历
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    
    return true;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,null,7]\n
// @lcpr case=end

 */

