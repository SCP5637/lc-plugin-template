/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=30400
 *
 * [15] 三数之和
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    return nSumTarget(nums, 3, 0, 0);
};

// 实际该问题更像是 n 数之和的分支，统一写出n数找和方法，4数和见#18
// nums: 操作数组对象
// n: n数
// start: 求和起始索引，一般都是nums0找到nums尾
// target: 目标和数值
function nSumTarget(nums, n, start, target) {
    const sz = nums.length;
    let res = [];
    if (n < 2 || sz < n) return res;
    if (n === 2) {
        // 双指针那一套操作
        let low = start, high = sz - 1;
        while (low < high) {
            const sum = nums[low] + nums[high];
            const left = nums[low], right = nums[high];
            if (sum < target) {
                while (low < high && nums[low] === left) low++;
            } else if (sum > target) {
                while (low < high && nums[high] === right) high--;
            } else {
                res.push([left, right]);
                while (low < high && nums[low] === left) low++;
                while (low < high && nums[high] === right) high--;
            }
        }
    } else {
        // n>2 时，递归(n-1)Sum
        for (let i = start; i < sz; i++) {
            const sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
            for (let arr of sub) {
                // (n-1)Sum 加上 nums[i] 就是 nSum
                arr.push(nums[i]);
                res.push(arr);
            }
            while (i < sz - 1 && nums[i] === nums[i + 1]) i++;
        }
    }
    return res;
}
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */

