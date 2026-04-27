/*
 * @lc app=leetcode.cn id=889 lang=javascript
 * @lcpr version=30403
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// var constructFromPrePost = function(preorder, postorder) {
//     // 与#105有中序遍历不同，这里需要前序后序构建二叉树
//     // 那么显然前序的第一个节点是根，后序的最后一个节点是根，
//     // 前序的第二个节点是根的左子树，后序的倒数第二个节点是根的右子树，依据这样的原理，比对出左右子树的边界，递归构建子树
//     if (preorder.length === 0) return null;
//     const root = new TreeNode(preorder[0]);
//     if (preorder.length === 1) return root;
//     const leftRoot = preorder[1];
//     const leftRootIndex = postorder.indexOf(leftRoot);
//     root.left = constructFromPrePost(preorder.slice(1, leftRootIndex + 2), postorder.slice(0, leftRootIndex));
//     root.right = constructFromPrePost(preorder.slice(leftRootIndex + 2), postorder.slice(leftRootIndex + 1, -1));
//     return root;
// };
var constructFromPrePost = function(preorder, postorder) {
    // 避免使用slice的优化方式
    const postIndexMap = new Map();

    for (let i = 0; i < postorder.length; i++) {
        postIndexMap.set(postorder[i], i);
    }

    function build(preStart, preEnd, postStart, postEnd) {
        if (preStart > preEnd) return null;

        const root = new TreeNode(preorder[preStart]);

        if (preStart === preEnd) return root;

        const leftRootVal = preorder[preStart + 1];
        const leftRootIndex = postIndexMap.get(leftRootVal);
        const leftSize = leftRootIndex - postStart + 1;

        root.left = build(
            preStart + 1,
            preStart + leftSize,
            postStart,
            leftRootIndex
        );

        root.right = build(
            preStart + leftSize + 1,
            preEnd,
            leftRootIndex + 1,
            postEnd - 1
        );

        return root;
    }

    return build(0, preorder.length - 1, 0, postorder.length - 1);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,4,5,3,6,7]\n[4,5,2,6,7,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n[1]\n
// @lcpr case=end

 */

