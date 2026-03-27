/*
 * @lc app=leetcode.cn id=429 lang=javascript
 * @lcpr version=30401
 *
 * [429] N 叉树的层序遍历
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        let level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (node) {
                level.push(node.val);
                queue.push(...node.children);
            }
        }
        res.push(level);
    }
    return res;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,null,3,2,4,null,5,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\n
// @lcpr case=end

 */

