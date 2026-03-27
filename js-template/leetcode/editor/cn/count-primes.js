/*
 * @lc app=leetcode.cn id=204 lang=javascript
 * @lcpr version=30401
 *
 * [204] 计数质数
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // 质数筛优化，注意观察两个for操作的起始和范围
    let isPrime = new Array(n).fill(true);
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }
    
    return count;
};
// @lc code=end

// your test code here




/*
// @lcpr case=start
// 10\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

