/*
 * @lc app=leetcode.cn id=344 lang=javascript
 * @lcpr version=30400
 *
 * [344] 反转字符串
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // let left=0,right=s.length-1;
    // while (left < right) {
    //     [s[left],s[right]]=[s[right],s[left]];
    //     left++;
    //     right--;
    // }
    // return s;

    // 实际数组自带reverse方法
    return s.reverse();
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// ["h","e","l","l","o"]\n
// @lcpr case=end

// @lcpr case=start
// ["H","a","n","n","a","h"]\n
// @lcpr case=end

 */

