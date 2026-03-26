/*
 * @lc app=leetcode.cn id=114 lang=javascript
 * @lcpr version=30401
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    // 利用了前序遍历的性质(root -> left -> right)，直接移动右子树到左子树的最右节点再把左子树右移，然后继续处理下一个右子树(刚才的左子树)，操作完成后就全到右边了
    let curr = root;
    while (curr) {
        if (curr.left) {
            let pre = curr.left;
            while (pre.right) pre = pre.right; // 找到左子树的最右节点
            pre.right = curr.right;            // 将原本的右子树接到左子树的最右节点上
            curr.right = curr.left;            // 左子树整体移到右边
            curr.left = null;                  // 左指针置空
        }
        curr = curr.right; // 继续处理下一个
    }
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,5,3,4,null,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

