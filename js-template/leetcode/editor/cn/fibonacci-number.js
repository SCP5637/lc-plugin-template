/*
 * @lc app=leetcode.cn id=509 lang=javascript
 * @lcpr version=30401
 *
 * [509] 斐波那契数
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     // 根据题目n范围，打表:
//     const table = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040];
//     return table[n];
// };
// var fib = function(n) {
//     // 树结构递归思维
//     if (n < 2) return n;
//     return fib(n - 1) + fib(n - 2);
// };
// var fib = function (n) {
//     // 记忆化递归，即把结果记录下来，避免重复计算
//     let memo = [];
//     if (n < 2) return n;
//     if (memo[n] !== undefined) return memo[n];
//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//     return memo[n];
// };
var fib = function (n) {
    // 对于极大的n数，建议使用快速幂算法，时间复杂度为O(logn)
    // 而实际由于快速幂这里在位运算，所以各种情况下时空复杂度效率都很高
    function pair(k) {
        if (k === 0) return [0, 1];
        const [a, b] = pair(k >> 1);
        const c = a * (2 * b - a);
        const d = a * a + b * b;
        return k % 2 === 0 ? [c, d] : [d, c + d];
    }
    return pair(n)[0];
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 30\n
// @lcpr case=end

 */

