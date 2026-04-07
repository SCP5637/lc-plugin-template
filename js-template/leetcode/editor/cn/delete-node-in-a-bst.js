/*
 * @lc app=leetcode.cn id=450 lang=javascript
 * @lcpr version=30402
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    // 由于BST左小右大，所以删除节点时，需要先找到节点，再删除节点
    // 删除节点后，将左子树移到右子树的最左侧，然后用右子树替换当前节点位置
    if (!root) return null;
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        // 找到节点，进行删除
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        
        // 将左子树移到右子树的最左侧
        let minNode = root.right;
        while (minNode.left) {
            minNode = minNode.left;
        }
        minNode.left = root.left;
        
        // 右子树置于删除节点位置
        return root.right;
    }
    return root;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [5,3,6,2,4,null,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,7]\n0\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */

