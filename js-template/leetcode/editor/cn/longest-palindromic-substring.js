/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30400
 *
 * [5] 最长回文子串
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = "";
    // 遍历
    for (let i = 0; i < s.length; i++) {
        // 根据奇偶性都找一遍回文段
        let s1 = findPalindrome(s, i, i);
        let s2 = findPalindrome(s, i, i + 1);
        // 比一个最长的存到res里
        res = res.length > s1.length ? res : s1;
        res = res.length > s2.length ? res : s2;
    }
    return res;
};

const findPalindrome = (s, left, right) => { 
    // 在给出的s字段中从left和right为中心开始左右展开，一直判断到不是回文时为止
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    // 截取回文的段
    return s.substring(left + 1, right);
}
// @lc code=end

// your test code here





/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */

