/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30402
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    
    // 1. 快慢指针找中点
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // 2. 反转后半部分链表
    let prev = null, cur = slow;
    while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    // 3. 比较前半部分和反转后的后半部分
    let left = head, right = prev;
    while (right) {  // 后半部分长度 <= 前半部分
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    
    return true;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */

