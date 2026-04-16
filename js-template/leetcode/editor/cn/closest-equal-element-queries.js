/*
 * @lc app=leetcode.cn id=3488 lang=javascript
 * @lcpr version=30403
 *
 * [3488] 距离最小相等元素查询
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    const n = nums.length;
    const m = n * 2;
    
    const leftDist = calcLeftDistance(nums, n, m);
    const rightDist = calcRightDistance(nums, n, m);
    
    const minDist = new Array(n);
    for (let i = 0; i < n; i++) {
        minDist[i] = Math.min(leftDist[i], rightDist[i]);
        // 同时考虑环形扩展位置的值
        minDist[i] = Math.min(minDist[i], leftDist[i + n], rightDist[i + n]);
    }
    
    return queries.map(q => minDist[q] >= n ? -1 : minDist[q]);
};

var calcLeftDistance = function(nums, n, m) {
    const dist = new Array(m).fill(m);
    const lastPos = new Map();
    
    for (let i = 0; i < m; i++) {
        const x = nums[i % n];
        if (lastPos.has(x)) {
            dist[i] = i - lastPos.get(x);
        }
        lastPos.set(x, i);
    }
    
    return dist;
};

var calcRightDistance = function(nums, n, m) {
    const dist = new Array(m).fill(m);
    const nextPos = new Map();
    
    for (let i = m - 1; i >= 0; i--) {
        const x = nums[i % n];
        if (nextPos.has(x)) {
            dist[i] = nextPos.get(x) - i;
        }
        nextPos.set(x, i);
    }
    
    return dist;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,3,1,4,1,3,2]\n[0,3,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n[0,1,2,3]\n
// @lcpr case=end

 */

