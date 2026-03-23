/*
 * @lc app=leetcode.cn id=88 lang=javascript
 * @lcpr version=30400
 *
 * [88] 合并两个有序数组
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(!(m || n))return;
    let ans = [];
    let i = 0, j = 0;
    while(i < m || j < n){
        if(i === m){
            ans.push(nums2[j++]);
        }else if(j === n){
            ans.push(nums1[i++]);
        }else if(nums1[i] < nums2[j]){
            ans.push(nums1[i++]);
        }else{
            ans.push(nums2[j++]);
        }
    }
    for(let k = 0; k < ans.length; k++){
        nums1[k] = ans[k];
    }
    return nums1;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,0,0,0]\n3\n[2,5,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n[]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0]\n0\n[1]\n1\n
// @lcpr case=end

 */

