/*
 * @lc app=leetcode.cn id=24 lang=javascript
 * @lcpr version=30400
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let pre = dummy;
    while (pre.next && pre.next.next) {
        let node1 = pre.next, node2 = pre.next.next;
        pre.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        pre = node1;
    }
    return dummy.next;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */

