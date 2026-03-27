/*
 * @lc app=leetcode.cn id=326 lang=javascript
 * @lcpr version=30401
 *
 * [326] 3 的幂
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfThree = function (n) {
//     // 递归正常写法
//     if (n <= 0) return false;
//     if (n === 1) return true;
//     return isPowerOfThree(n / 3);
// };
var isPowerOfThree = function (n) {
    // 题意版本
    if (n <= 0) return false;
    if ((n & 1) === 0) return false;
    return 1162261467 % n === 0;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 27\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

// @lcpr case=start
// -1\n
// @lcpr case=end

 */

