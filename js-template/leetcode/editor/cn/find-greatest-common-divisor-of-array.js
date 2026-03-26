/*
 * @lc app=leetcode.cn id=1979 lang=javascript
 * @lcpr version=30401
 *
 * [1979] 找出数组的最大公约数
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    return gcd(max, min);
};

// 辗转相除法递归最大公因数
var gcd = function(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// 最大公倍数也可以基于gcd得到，因为a * b = gcd(a, b) * lcm(a, b)
// var lcm = function(a, b) {
//     return a * b / gcd(a, b);
// }
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [2,5,6,9,10]\n
// @lcpr case=end

// @lcpr case=start
// [7,5,6,8,3]\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n
// @lcpr case=end

 */

