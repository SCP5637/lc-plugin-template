/*
 * @lc app=leetcode.cn id=572 lang=javascript
 * @lcpr version=30403
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// var isSubtree = function(root, subRoot) {
//     // 直观双层递归方案
//     if (!subRoot) {
//         return true;
//     }
//     if (!root) {
//         return false;
//     }
//     return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
// };

// var isSameTree = function(p, q) {
//     if (!p && !q) {
//         return true;
//     }
//     if (!p || !q) {
//         return false;
//     }
//     return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// }
var isSubtree = function(root, subRoot) {
    // 递归方案优化，开始递归前线检查俩树的深度，如果subRoot深度大于root深度，直接返回false，反之则只需要检查深度差之内的范围即可
    const subDepth = getDepth(subRoot);
    const rootDepth = getDepth(root);
    
    if (subDepth > rootDepth) {
        return false;
    }
    
    return dfsWithDepth(root, subRoot, subDepth, 1);
};

var dfsWithDepth = function(node, subRoot, subDepth, currentDepth) {
    if (!node) return false;
    
    const remainingLevels = subDepth - 1;
    // const maxPossibleDepth = currentDepth + remainingLevels;
    
    const canMatch = true;
    
    const same = canMatch && isSameTree(node, subRoot);
    
    return same || 
           dfsWithDepth(node.left, subRoot, subDepth, currentDepth + 1) || 
           dfsWithDepth(node.right, subRoot, subDepth, currentDepth + 1);
};
var getDepth = function(node) {
    if (!node) return 0;
    return 1 + Math.max(getDepth(node.left), getDepth(node.right));
};
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [3,4,5,1,2]\n[4,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,5,1,2,null,null,null,null,0]\n[4,1,2]\n
// @lcpr case=end

 */

