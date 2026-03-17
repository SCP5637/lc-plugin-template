/*
 * @lc app=leetcode.cn id=61 lang=javascript
 * @lcpr version=30400
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    // 双指针，快指针先移动k步，然后快慢指针同时移动，直到快指针到达链表末尾
    let fast = head, slow = head;
    // 先拿到链表长度
    let len = 0;
    while (fast) {
        fast = fast.next;
        len++;
    }
    // k大于链表长度没有意义，所以只看余数就可以了
    k = k % len;
    fast = head;
    // 后面就是经典的双指针同时动了
    while (k--) {
        fast = fast.next;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2]\n4\n
// @lcpr case=end

 */

