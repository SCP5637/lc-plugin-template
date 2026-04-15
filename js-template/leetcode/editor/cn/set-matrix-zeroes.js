/*
 * @lc app=leetcode.cn id=73 lang=javascript
 * @lcpr version=30403
 *
 * [73] 矩阵置零
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var setZeroes = function(matrix) {
//     // 正常编写:
//     // 核心思想是使用两个辅助数组，一个记录行是否需要置零，另一个记录列是否需要置零
//     const m = matrix.length;
//     const n = matrix[0].length;
//     const rowZero = Array(m).fill(false);
//     const colZero = Array(n).fill(false);
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (matrix[i][j] === 0) {
//                 rowZero[i] = true;
//                 colZero[j] = true;
//             }
//         }
//     }
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (rowZero[i] || colZero[j]) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }
// };
var setZeroes = function(matrix) {
    // 空间复杂度优化，直接利用原有矩阵弄个置0来标记需置0行列
    const m = matrix.length;
    const n = matrix[0].length;
    
    // 1. 先记录第一行和第一列是否需要置零
    let firstRowZero = false;
    let firstColZero = false;
    
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }
    
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }
    
    // 2. 用第一行和第一列作为标记位
    // matrix[i][0] 标记第 i 行是否需要置零
    // matrix[0][j] 标记第 j 列是否需要置零
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;  // 标记行
                matrix[0][j] = 0;  // 标记列
            }
        }
    }
    
    // 3. 根据标记置零（除了第一行和第一列）
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // 4. 最后处理第一行和第一列
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [[1,1,1],[1,0,1],[1,1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\n
// @lcpr case=end

 */

