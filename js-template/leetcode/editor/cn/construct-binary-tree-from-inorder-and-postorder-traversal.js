/*
 * @lc app=leetcode.cn id=106 lang=javascript
 * @lcpr version=30403
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    // 分析见#105
    const indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }
    
    const build = (postLeft, postRight, inLeft, inRight) => {
        if (postLeft > postRight) return null;
        
        const rootVal = postorder[postRight];
        const root = new TreeNode(rootVal);
        const rootIndex = indexMap.get(rootVal);
        const leftSize = rootIndex - inLeft;
        
        root.left = build(postLeft, postLeft + leftSize - 1, inLeft, rootIndex - 1);
        root.right = build(postLeft + leftSize, postRight - 1, rootIndex + 1, inRight);
        
        return root;
    };
    
    return build(0, postorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [9,3,15,20,7]\n[9,15,7,20,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */

