/*
 * @lc app=leetcode.cn id=86 lang=javascript
 * @lcpr version=30400
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let listPre = new ListNode(-1);
    let listPost = new ListNode(-1);
    let pre = listPre, post = listPost;
    let gift = head;

    while (gift !== null) {
        if (gift.val < x) {
            pre.next = gift;
            pre = pre.next;
        } else {
            post.next = gift;
            post = post.next;
        }
        gift = gift.next;
    }

    post.next = null;
    pre.next = listPost.next;
    return listPre.next;
};
// @lc code=end

// your test code here

// @lcpr case=start
// [1,4,5,2,6,2,1,3]\n5\n
// @lcpr case=end




/*
// @lcpr case=start
// [1,4,3,2,5,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n2\n
// @lcpr case=end

 */

