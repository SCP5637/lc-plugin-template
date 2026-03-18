/*
 * @lc app=leetcode.cn id=142 lang=javascript
 * @lcpr version=30400
 *
 * [142] 环形链表 II
 */


import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head === null || head.next === null) return null;
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        // 相遇后，把一个节点放回起点，再走一次，相遇时就一定在环的入口节点
        // 如果起始节点距离入环点是a
        // 从入环点到相遇点距离是b
        // 环的周长是c
        // 则有：
        // slow走了a+b
        // fast走了a+b+n*c
        // 因为fast走的是slow的两倍
        // 所以有：2*(a+b) = a+b+n*c
        // 所以有：a = n*c - b
        // 所以从相遇点再走a步，就会到达入环点
        
        if (slow === fast) {
            let p = head;
            while (p !== slow) {
                p = p.next;
                slow = slow.next;
            }
            return p;
        }
    }

    return null;
};
// @lc code=end

// your test code here





/*
// @lcpr case=start
// [3,2,0,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n-1\n
// @lcpr case=end

 */

