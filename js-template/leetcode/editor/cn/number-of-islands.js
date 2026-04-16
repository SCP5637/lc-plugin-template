/*
 * @lc app=leetcode.cn id=200 lang=javascript
 * @lcpr version=30403
 *
 * [200] 岛屿数量
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;
    
    // 感染法，操作原数据(实在不行就复刻一份)，发现了1，就找到所有相邻并全部设为0，记为一个岛，也避免反复计数
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    
    // DFS 函数：将相邻的陆地全部标记为 '0'
    const dfs = (i, j) => {
        // 边界检查 + 是否为陆地检查
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === '0') {
            return;
        }
        
        // 标记为已访问（沉岛）
        grid[i][j] = '0';
        
        // 向四个方向扩散
        dfs(i + 1, j); // 下
        dfs(i - 1, j); // 上
        dfs(i, j + 1); // 右
        dfs(i, j - 1); // 左
    };
    
    // 遍历整个网格
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++;        // 发现新岛屿
                dfs(i, j);      // 将整座岛屿沉掉
            }
        }
    }
    
    return count;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]\n
// @lcpr case=end

// @lcpr case=start
// [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]\n
// @lcpr case=end

 */

