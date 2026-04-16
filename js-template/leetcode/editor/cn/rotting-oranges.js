/*
 * @lc app=leetcode.cn id=994 lang=javascript
 * @lcpr version=30403
 *
 * [994] 腐烂的橘子
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // 本质就是一个记录深度的层序遍历，然后最后检测是否遍历完了所有1，没有1了就返回深度
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];  // BFS 队列，存储 [row, col]
    let freshCount = 0; // 新鲜橘子数量
    
    // 1. 初始化：找到所有腐烂橘子，统计新鲜橘子
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);  // 多源头起点
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }
    
    // 如果没有新鲜橘子，直接返回 0
    if (freshCount === 0) return 0;
    
    let minutes = 0; // 即层序遍历深度
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    // 2. BFS 层序遍历
    while (queue.length > 0 && freshCount > 0) {
        const size = queue.length;  // 当前层的节点数
        
        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();
            
            // 向四个方向扩散
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                
                // 边界检查 & 是否为新鲜橘子
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2;      // 变腐烂
                    freshCount--;           // 新鲜橘子减一
                    queue.push([nr, nc]);   // 加入队列，下一分钟会继续扩散
                }
            }
        }
        
        minutes++;  // 一分钟过去
    }
    
    // 3. 检查是否还有新鲜橘子
    return freshCount === 0 ? minutes : -1;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [[2,1,1],[1,1,0],[0,1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[2,1,1],[0,1,1],[1,0,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,2]]\n
// @lcpr case=end

 */

