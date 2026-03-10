/*
 * @lc app=leetcode.cn id=19 lang=javascript
 * @lcpr version=30400
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let preNode = head;
    let postNode = head;
    for(let i = 0; i < n; i++){
        postNode = postNode.next;
    }
    if(!postNode){
        return head.next;
    }
    while(postNode.next){
        preNode = preNode.next;
        postNode = postNode.next;
    }
    preNode.next = preNode.next.next;
    return head;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */

