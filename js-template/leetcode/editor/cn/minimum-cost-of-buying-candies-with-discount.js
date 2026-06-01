/*
 * @lc app=leetcode.cn id=2144 lang=javascript
 * @lcpr version=30403
 *
 * [2144] 打折购买糖果的最小开销
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    // 降序排序，让贵的糖果优先被付费
    cost.sort((a, b) => b - a);
    
    let total = 0;
    for (let i = 0; i < cost.length; i++) {
        // 每3个为一组，索引为 2, 5, 8... 的糖果免费（0-based）
        if ((i + 1) % 3 !== 0) {
            total += cost[i];
        }
    }
    
    return total;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [6,5,7,9,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [5,5]\n
// @lcpr case=end

 */

