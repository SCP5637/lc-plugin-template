/*
 * @lc app=leetcode.cn id=23 lang=javascript
 * @lcpr version=30400
 *
 * [23] 合并 K 个升序链表
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";
import {PriorityQueue} from "../common/priorityQueue.js";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    if (lists.length > 0) {
        let minPQ = new PriorityQueue((a, b) => a.val - b.val);
        for (let i = 0; i < lists.length; i++){
            if (lists[i] !== null) {
                minPQ.push(lists[i]);
            }
        }

        let dummy = new ListNode(-1);
        let p = dummy;
        while(!minPQ.isEmpty()) {
            let cur = minPQ.pop();
            p.next = cur;
            if (cur.next !== null) {
                minPQ.push(cur.next);
            }
            p = p.next;
        }
        return dummy.next;
    }
    return null;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */

