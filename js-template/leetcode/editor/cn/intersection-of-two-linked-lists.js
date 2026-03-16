/*
 * @lc app=leetcode.cn id=160 lang=javascript
 * @lcpr version=30400
 *
 * [160] 相交链表
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    if(headA === headB) return headA;
    let tmpA = headA, tmpB = headB;
    let cur = null;
    // 首尾拼一起，从头往后遍历发现两边一样了那就是相交了的点
    while (tmpA !== tmpB) {
        tmpA = tmpA ? tmpA.next : headB;
        tmpB = tmpB ? tmpB.next : headA;
        if(tmpA === tmpB) {
            cur = tmpA;
            break;
        }
    }
    return cur;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// 8\n[4,1,8,4,5]\n[5,6,1,8,4,5]\n2\n3\n
// @lcpr case=end

// @lcpr case=start
// 2\n[1,9,1,2,4]\n[3,2,4]\n3\n1\n
// @lcpr case=end

// @lcpr case=start
// 0\n[2,6,4]\n[1,5]\n3\n2\n
// @lcpr case=end

 */

