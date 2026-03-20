/*
 * @lc app=leetcode.cn id=20 lang=javascript
 * @lcpr version=30400
 *
 * [20] 有效的括号
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                return false;
            }
            let top = stack.pop();
            if (s[i] === ")" && top !== "(") {
                return false;
            }
            if (s[i] === "]" && top !== "[") {
                return false;
            }
            if (s[i] === "}" && top !== "{") {
                return false;
            }
        }
    }
    return stack.length === 0;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

// @lcpr case=start
// "([])"\n
// @lcpr case=end

// @lcpr case=start
// "([)]"\n
// @lcpr case=end

 */

