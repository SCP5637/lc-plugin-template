/*
 * @lc app=leetcode.cn id=LCR 140 lang=javascript
 * @lcpr version=30400
 *
 * [LCR 140] 训练计划 II
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function(head, cnt) {
    if (!head || !head.next) return head;
    let pre = post = head;
    while (cnt--) {
        post = post.next;
    }
    while (post) {
        pre = pre.next;
        post = post.next;
    }
    return pre;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [2,4,7,8]\n1\n
// @lcpr case=end

 */

