/*
 * @lc app=leetcode.cn id=3418 lang=javascript
 * @lcpr version=30402
 *
 * [3418] 机器人可以获得的最大金币数
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function(coins) {
    const m = coins.length;
    const n = coins[0].length;

    let prevRow = Array.from({ length: n }, () => [-Infinity, -Infinity, -Infinity]);

    for (let i = 0; i < m; i++) {
        const currRow = Array.from({ length: n }, () => [-Infinity, -Infinity, -Infinity]);
        for (let j = 0; j < n; j++) {
            const v = coins[i][j];
            for (let used = 0; used <= 2; used++) {
                let bestPrev = -Infinity;
                if (i > 0) bestPrev = Math.max(bestPrev, prevRow[j][used]);
                if (j > 0) bestPrev = Math.max(bestPrev, currRow[j - 1][used]);
                if (i === 0 && j === 0 && used === 0) bestPrev = 0;

                if (bestPrev === -Infinity) continue;

                currRow[j][used] = Math.max(currRow[j][used], bestPrev + v);
                if (v < 0 && used < 2) {
                    currRow[j][used + 1] = Math.max(currRow[j][used + 1], bestPrev);
                }
            }
        }
        prevRow = currRow;
    }

    return Math.max(prevRow[n - 1][0], prevRow[n - 1][1], prevRow[n - 1][2]);
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [[0,1,-1],[1,-2,3],[2,-3,4]]\n
// @lcpr case=end

// @lcpr case=start
// [[10,10,10],[10,10,10]]\n
// @lcpr case=end

 */

