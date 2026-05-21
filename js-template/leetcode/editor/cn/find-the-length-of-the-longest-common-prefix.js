/*
 * @lc app=leetcode.cn id=3043 lang=javascript
 * @lcpr version=30403
 *
 * [3043] 最长公共前缀的长度
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const prefixSet = new Set();
    
    for (let num of arr1) {
        while (num > 0) {
            prefixSet.add(num);
            num = Math.floor(num / 10);
        }
    }
    
    let maxLen = 0;
    
    for (let num of arr2) {
        while (num > 0) {
            if (prefixSet.has(num)) {
                const len = String(num).length;
                maxLen = Math.max(maxLen, len);
                break;
            }
            num = Math.floor(num / 10);
        }
    }
    
    return maxLen;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,10,100]\n[1000]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n[4,4,4]\n
// @lcpr case=end

 */

