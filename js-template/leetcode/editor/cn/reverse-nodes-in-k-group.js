/*
 * @lc app=leetcode.cn id=25 lang=javascript
 * @lcpr version=30402
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function(head, k) {
    // 检查是否能跑到k个节点
    let cur = head;
    for (let i = 0; i < k; i++) {
        if (!cur) return head;
        cur = cur.next;
    }
    // 如果能跑到K个，则将这一段翻转，如果不行则直接返回这一段的head
    const newHead = reverseKGroup(cur, k);
    let prev = null, post = head;
    for (let i = 0; i < k; i++) {
        const next = post.next;
        post.next = prev;
        prev = post;
        post = next;
    }
    head.next = newHead;
    return prev;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n3\n
// @lcpr case=end

 */

