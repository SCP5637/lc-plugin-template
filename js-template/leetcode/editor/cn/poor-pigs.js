/*
 * @lc app=leetcode.cn id=458 lang=javascript
 * @lcpr version=30403
 *
 * [458] 可怜的小猪
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    // 数学方法:
    // 一头猪有minutesToTest/minutesToDie + 1种状态，即死、生、未测试
    // 所以，一头猪可以测试minutesToTest/minutesToDie + 1 = T个桶
    // 所以，n头猪可以测试T ^ n个桶
    // 那么显然则是对该数值取对数并向上取整数
    const rounds = Math.floor(minutesToTest / minutesToDie);
    const states = rounds + 1;
    if (states === 1) return buckets === 1 ? 0 : Infinity;
    
    // 减去一个极小的数来避免浮点数精度导致的向上取整错误
    return Math.ceil(Math.log(buckets) / Math.log(states) - 1e-10);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 4\n15\n15\n
// @lcpr case=end

// @lcpr case=start
// 4\n15\n30\n
// @lcpr case=end

 */

