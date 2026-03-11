/*
 * @lc app=leetcode.cn id=面试题 01.01 lang=javascript
 * @lcpr version=30400
 *
 * [面试题 01.01] 判定字符是否唯一
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    // set()取得集合去重
    return astr.length === new Set(astr).size;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// "leetcode"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n
// @lcpr case=end

 */

