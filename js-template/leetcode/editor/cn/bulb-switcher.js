/*
 * @lc app=leetcode.cn id=319 lang=javascript
 * @lcpr version=30401
 *
 * [319] 灯泡开关
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    // 假设有16盏灯，你会发现最后剩下的亮着的灯只有1、4、9、16这四盏，你发现了什么？
    // 这就是1²，2²，3²，4²，那么实际就是求1到n之间有多少个完全平方数
    return Math.floor(Math.sqrt(n));
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

