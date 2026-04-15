/*
 * @lc app=leetcode.cn id=2515 lang=javascript
 * @lcpr version=30403
 *
 * [2515] 到目标字符串的最短距离
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    const len = words.length;
    
    if (!words.includes(target)) return -1;
    
    for (let d = 0; d <= len / 2; d++) {
        const left = (startIndex - d + len) % len;
        const right = (startIndex + d) % len;
        
        if (words[left] === target || words[right] === target) {
            return d;
        }
    }
    
    return -1;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// ["hello","i","am","leetcode","hello"]\n"hello"\n1\n
// @lcpr case=end

// @lcpr case=start
// ["a","b","leetcode"]\n"leetcode"\n0\n
// @lcpr case=end

// @lcpr case=start
// ["i","eat","leetcode"]\n"ate"\n0\n
// @lcpr case=end

 */

