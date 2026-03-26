/*
 * @lc app=leetcode.cn id=95 lang=javascript
 * @lcpr version=30401
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) return [];
    const memo = new Map();
    
    // 自顶向下dp，build发起递归lo到hi区间，遍历lo到hi，取root
    // root左边的节点建立子树，区间是root左边的区间，右侧同理，如果空就返回null
    // 所有root遍历完，也就构建完了，注意res非基例时只 push TreeNode 实例，避免答案数组乱套
    
    function build(lo, hi) {
        const key = lo + ',' + hi;
        // 取memo记忆，避免递归爆炸
        if (memo.has(key)) return memo.get(key);
        const res = [];
        if (lo > hi) {
            res.push(null);
        } else {
            for (let root = lo; root <= hi; root++) {
                const leftTrees = build(lo, root - 1);
                const rightTrees = build(root + 1, hi);
                for (let i = 0; i < leftTrees.length; i++) {
                    const left = leftTrees[i];
                    for (let j = 0; j < rightTrees.length; j++) {
                        const right = rightTrees[j];
                        res.push(new TreeNode(root, left, right));
                    }
                }
            }
        }
        memo.set(key, res);
        return res;
    }
    return build(1, n);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

