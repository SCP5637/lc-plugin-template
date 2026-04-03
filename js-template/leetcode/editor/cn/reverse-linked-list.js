/*
 * @lc app=leetcode.cn id=206 lang=javascript
 * @lcpr version=30402
 *
 * [206] 反转链表
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
var reverseList = function(head) {
    // 利用递归
    if (!head || !head.next) return head;
    const last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

