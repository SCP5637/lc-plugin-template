/*
 * @lc app=leetcode.cn id=1009 lang=javascript
 * @lcpr version=30400
 *
 * [1009] 十进制整数的反码
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    if(!n) return 1;
    let mask = 1;
    // 位运算异或取反
    while(mask <= n) {
        mask <<= 1;
    }
    mask -= 1;
    return n ^ mask;
};
// 我的常规写法
// var bitwiseComplement = function(n) {
//     if(!n) return 1;
//     // 常规转二进制字符串再split转数组后操作反转再parseInt取回十进制数
//     let tn = n.toString(2).split('');
//     for(let i = 0; i < tn.length; i++) {
//         if(tn[i] === '0') {
//             tn[i] = '1';
//         } else {
//             tn[i] = '0';
//         }
//     }
//     tn = tn.join('');
//     return parseInt(tn, 2);
// };
// @lc code=end

// your test code here
/*
// @lcpr case=start
// 9\n
// @lcpr case=end




/*
// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 7\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */

