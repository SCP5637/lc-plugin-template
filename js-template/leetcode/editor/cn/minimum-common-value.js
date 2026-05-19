/*
 * @lc app=leetcode.cn id=2540 lang=javascript
 * @lcpr version=30403
 *
 * [2540] 最小公共值
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    // 双指针轮询一遍两个数组就比出来了
    let i = 0, j = 0;
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] === nums2[j]) {
            return nums1[i];
        } else if(nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return -1;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3]\n[2,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,6]\n[2,3,4,5]\n
// @lcpr case=end

 */

