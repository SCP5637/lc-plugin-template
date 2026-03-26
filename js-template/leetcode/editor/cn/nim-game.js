/*
 * @lc app=leetcode.cn id=292 lang=javascript
 * @lcpr version=30401
 *
 * [292] Nim 游戏
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n % 4 !== 0;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

// @lcpr case=start
// 2\n
// @lcpr case=end

 */

