/*
 * @lc app=leetcode.cn id=118 lang=javascript
 * @lcpr version=30403
 *
 * [118] 杨辉三角
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    
    const result = [[1]];
    
    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1];
        const currentRow = new Array(i + 1);
        
        currentRow[0] = 1;
        currentRow[i] = 1;
        
        for (let j = 1; j < i; j++) {
            currentRow[j] = prevRow[j - 1] + prevRow[j];
        }
        
        result[i] = currentRow;
    }
    
    return result;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

