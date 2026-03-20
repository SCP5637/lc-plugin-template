/*
 * @lc app=leetcode.cn id=2 lang=javascript
 * @lcpr version=30400
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy1 = l1;
    let dummy2 = l2;
    let Ans = new ListNode(0);

    let cur = Ans;
    let carry = 0;
    while (dummy1 || dummy2 || carry) {
        let val1 = dummy1 ? dummy1.val : 0;
        let val2 = dummy2 ? dummy2.val : 0;
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if (dummy1) dummy1 = dummy1.next;
        if (dummy2) dummy2 = dummy2.next;
    }
    return Ans.next;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */

