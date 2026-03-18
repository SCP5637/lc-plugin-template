/*
 * @lc app=leetcode.cn id=92 lang=javascript
 * @lcpr version=30400
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (head.next === null) return head;
    let dummy = new ListNode(0, head);
    // pre获取到left的前面一个点
    let pre = dummy;
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }
    // cur获取到left点
    let cur = pre.next;
    for (let i = 0; i < right - left; i++) {
        let thisNext = cur.next;
        cur.next = thisNext.next;
        thisNext.next = pre.next;
        pre.next = thisNext;
    }
    return dummy.next;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n1\n
// @lcpr case=end

 */

