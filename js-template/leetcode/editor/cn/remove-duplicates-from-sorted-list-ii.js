/*
 * @lc app=leetcode.cn id=82 lang=javascript
 * @lcpr version=30400
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0, head);
    let tmp = dummy;
    while (tmp.next && tmp.next.next) { 
        if (tmp.next.val !== tmp.next.next.val) { 
            tmp = tmp.next;
        } else { 
            let val = tmp.next.val;
            while (tmp.next && tmp.next.val === val) { 
                tmp.next = tmp.next.next;
            }
        }
    }
    return dummy.next;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [1,2,3,3,4,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,2,3]\n
// @lcpr case=end

 */

