/*
 * @lc app=leetcode.cn id=105 lang=javascript
 * @lcpr version=30403
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function(preorder, inorder) {
//     // 前序的第一个元素是 根节点
//     // 这样就能在中序中找到根节点的位置，左边是左子树，右边是右子树，然后递归构建左右子树了
//     // 后序+中序 同理
//     if (preorder.length === 0) return null;
//     const root = new TreeNode(preorder[0]);
//     const index = inorder.indexOf(preorder[0]);
//     root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
//     root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
//     return root;
// };
var buildTree = function(preorder, inorder) {
    // 避免使用slice能大幅优化(slice本身是O(n)操作)
    // 构建中序值到索引的映射，避免每次 O(n) 查找
    const indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }
    
    const build = (preLeft, preRight, inLeft, inRight) => {
        if (preLeft > preRight) return null;
        
        const rootVal = preorder[preLeft];
        const root = new TreeNode(rootVal);
        const rootIndex = indexMap.get(rootVal);
        const leftSize = rootIndex - inLeft;
        
        root.left = build(preLeft + 1, preLeft + leftSize, inLeft, rootIndex - 1);
        root.right = build(preLeft + leftSize + 1, preRight, rootIndex + 1, inRight);
        
        return root;
    };
    
    return build(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */

