/*
 * @lc app=leetcode.cn id=2553 lang=javascript
 * @lcpr version=30403
 *
 * [2553] 分割数组中数字的数位
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let ans = [];
    for(let num of nums){
        let str = num.toString();
        for(let i = 0; i < str.length; i++){
            ans.push(Number(str[i]));
        }
    }
    return ans;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [13,25,83,77]\n
// @lcpr case=end

// @lcpr case=start
// [7,1,3,9]\n
// @lcpr case=end

 */

