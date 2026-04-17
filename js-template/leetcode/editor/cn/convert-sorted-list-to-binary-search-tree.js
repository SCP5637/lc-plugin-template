/*
 * @lc app=leetcode.cn id=109 lang=javascript
 * @lcpr version=30403
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) return null;
    
    // 快慢指针找到链表中点
    let slow = head;
    let fast = head;
    let prev = null;
    
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    const root = new TreeNode(slow.val);
    if (slow === head) {
        return root;
    }
    prev.next = null;
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(slow.next);
    
    return root;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [-10,-3,0,5,9]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

