/*
 * @lc app=leetcode.cn id=2833 lang=javascript
 * @lcpr version=30403
 *
 * [2833] 距离原点最远的点
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let lCount = 0, rCount = 0, underCount = 0;
    
    for (const move of moves) {
        if (move === 'L') lCount++;
        else if (move === 'R') rCount++;
        else underCount++;
    }
    
    // 所有 _ 都往同一个方向移动，使得距离最大化
    return Math.abs(rCount - lCount) + underCount;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// "L_RL__R"\n
// @lcpr case=end

// @lcpr case=start
// "_R__LL_"\n
// @lcpr case=end

// @lcpr case=start
// "_______"\n
// @lcpr case=end

 */

