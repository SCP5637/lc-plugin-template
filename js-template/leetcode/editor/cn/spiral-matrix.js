/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30403
 *
 * [54] 螺旋矩阵
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        // 1. 从左到右遍历上层
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++; // 上层收缩
        
        // 2. 从上到下遍历右层
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--; // 右层收缩
        
        // 3. 从右到左遍历下层（需要检查是否还有行）
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--; // 下层收缩
        }
        
        // 4. 从下到上遍历左层（需要检查是否还有列）
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++; // 左层收缩
        }
    }
    
    return result;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */

