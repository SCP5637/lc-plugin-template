/*
 * @lc app=leetcode.cn id=32 lang=javascript
 * @lcpr version=30403
 *
 * [32] 最长有效括号
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // 在栈里模拟括号匹配过程
    const stack = [];
    stack.push(-1);
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length > 0) {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            } else {
                stack.push(i);
            }
        }
    }
    return maxLength;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// "(()"\n
// @lcpr case=end

// @lcpr case=start
// ")()())"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

 */

