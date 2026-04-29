/*
 * @lc app=leetcode.cn id=29 lang=javascript
 * @lcpr version=30400
 *
 * [29] 两数相除
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // 处理溢出边界情况
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    
    // 记录结果的符号
    const negative = (dividend < 0) !== (divisor < 0);
    
    // 全部转为负数（避免 -2147483648 转正数溢出）
    let a = dividend > 0 ? -dividend : dividend;
    let b = divisor > 0 ? -divisor : divisor;
    
    let result = 0;
    
    // 核心：倍增法
    while (a <= b) {  // 注意：都是负数，所以用 <=
        let value = b;      // 当前除数的倍数
        let quotient = 1;   // 当前倍数
        
        // 倍增：value * 2（用加法避免溢出）
        while (value >= -1073741824 && a <= value + value) {
            value += value;     // 除数翻倍
            quotient += quotient; // 计数翻倍
        }
        
        result += quotient;
        a -= value;  // 减去已经计算的部分
    }
    
    return negative ? -result : result;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 10\n3\n
// @lcpr case=end

// @lcpr case=start
// 7\n-3\n
// @lcpr case=end

 */

