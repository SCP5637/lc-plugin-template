/*
 * @lc app=leetcode.cn id=235 lang=javascript
 * @lcpr version=30401
 *
 * [235] 二叉搜索树的最近公共祖先
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {
//     // 通用解法，当前这个思路放什么树里都正确，当前最优通解
//     // 后序遍历递归，对比节点的左右子树查找，如果分别在左右子树，则记为当前节点，并剪枝另一边(后序遍历拿到所有信息，最后比对左右并输出)
//     if (!root) {
//         return null;
//     }
//     if (root.val === p.val || root.val === q.val) {
//         return root;
//     }
//     const left = lowestCommonAncestor(root.left, p, q);
//     const right = lowestCommonAncestor(root.right, p, q);
//     if (left && right) {
//         return root;
//     }
//     return left || right;
// };
var lowestCommonAncestor = function(root, p, q) {
    // 二叉搜索树特供解法，利用左小右大
    if (!root) {
        return null;
    }
    let pVal = p.val;
    let qVal = q.val;
    if (pVal > qVal) {
        const tmp = pVal;
        pVal = qVal;
        qVal = tmp;
    }
    while (root) {
        if (root.val > qVal) {
            root = root.left;
        } else if (root.val < pVal) {
            root = root.right;
        } else {
            return root;
        }
    }
    return null;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [6,2,8,0,4,7,9,null,null,3,5]\n2\n8\n
// @lcpr case=end

// @lcpr case=start
// [6,2,8,0,4,7,9,null,null,3,5]\n2\n4\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n2\n1\n
// @lcpr case=end

 */

