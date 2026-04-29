/*
 * @lc app=leetcode.cn id=9 lang=javascript
 * @lcpr version=30400
 *
 * [9] 回文数
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 负数不是回文数
    // 如果数字的最后一位是0，那么只有当数字是0时才是回文数
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // 当数字长度为奇数时，可以通过 reversedHalf / 10 去除中间位
    // 当数字长度为偶数时，x === reversedHalf
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 121\n
// @lcpr case=end

// @lcpr case=start
// -121\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */

