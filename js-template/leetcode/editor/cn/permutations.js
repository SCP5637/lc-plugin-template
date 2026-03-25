/*
 * @lc app=leetcode.cn id=46 lang=javascript
 * @lcpr version=30401
 *
 * [46] 全排列
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
    // single单次选择
    let single = [];
    // used标记放进single被使用过的，避免元素反复用
    let used = new Array(nums.length).fill(false);

    // 典型回溯算法框架，这里就相当于是一棵树的遍历，backtrack选一个点，在剩下的集合中继续backtrack选一个点，直到选完，再回溯回上一层，直到选完，再回溯到上一层，直到递归完成
    function backtrack(nums,single,used) { 
        if(single.length === nums.length) {
            ans.push(single.slice());
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(used[i]) continue;
            // 做选择
            single.push(nums[i]);
            used[i] = true;
            // 进入下一层决策
            backtrack(nums,single,used);
            // 撤销选择
            single.pop();
            used[i] = false;
        }
    }
    backtrack(nums,single,used);
    return ans
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

