/*
 * @lc app=leetcode.cn id=2657 lang=javascript
 * @lcpr version=30403
 *
 * [2657] 找到两个数组的前缀公共数组
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const n = A.length;
    const result = new Array(n);
    const count = new Array(n + 1).fill(0);
    let common = 0;
    
    for (let i = 0; i < n; i++) {
        if (++count[A[i]] === 2) common++;
        if (++count[B[i]] === 2) common++;
        result[i] = common;
    }
    
    return result;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,3,2,4]\n[3,1,2,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,1]\n[3,1,2]\n
// @lcpr case=end

 */

