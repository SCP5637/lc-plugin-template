/*
 * @lc app=leetcode.cn id=343 lang=javascript
 * @lcpr version=30403
 *
 * [343] 整数拆分
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // 数学规律解法：尽可能拆成多个3，如果剩余1则和一个3组成2*2
    if (n === 2) return 1;
    if (n === 3) return 2;
    let res = 1;
    if ( n%3 === 1 ) {
        n-=4;
        res *= 4;
        while (n > 0) {
            n-=3;
            res *= 3;
        }
    } else {
        while ( n >= 3) {
            n-=3;
            res *= 3;
        }
        if (n > 0) {
            res *= n;
        }
    }
    return res;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */

