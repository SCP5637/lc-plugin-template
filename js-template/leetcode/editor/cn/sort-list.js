/*
 * @lc app=leetcode.cn id=148 lang=javascript
 * @lcpr version=30402
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function(head) {
    // 利用归并排序思路分治
    if (!head || !head.next) return head;
    // 1. 快慢指针找中点
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 2. 断开链表
    const mid = slow.next;
    slow.next = null;
    // 3. 递归排序
    const left = sortList(head);
    const right = sortList(mid);
    // 4. 合并排序后的链表
    return merge(left, right);
};

function merge(left, right) {
    const dummy = new ListNode(0);
    let cur = dummy;
    
    while (left && right) {
        if (left.val < right.val) {
            cur.next = left;
            left = left.next;
        } else {
            cur.next = right;
            right = right.next;
        }
        cur = cur.next;
    }
    
    cur.next = left || right;
    return dummy.next;
}
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [4,2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1,5,3,4,0]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

