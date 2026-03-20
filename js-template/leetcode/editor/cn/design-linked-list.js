/*
 * @lc app=leetcode.cn id=707 lang=javascript
 * @lcpr version=30400
 *
 * [707] 设计链表
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start
class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

var MyLinkedList = function() {
    this.head = new LinkNode(0, null);
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;
    let cur = this.head.next;
    for (let i = 0; i < index; i++) {
        cur = cur.next;
    }
    return cur.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size, val);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) return;
    if (index < 0) index = 0;

    let prev = this.head;
    for (let i = 0; i < index; i++) {
        prev = prev.next;
    }
    prev.next = new LinkNode(val, prev.next);
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;
    let prev = this.head;
    for (let i = 0; i < index; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

// your test code here

/*
// @lcpr case=start
// ["MyLinkedList","deleteAtIndex"]\n[[],[0]]
// @lcpr case=end
 */


/*
// @lcpr case=start
// ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]\n[[],[1],[3],[1,2],[1],[1],[1]]\n
// @lcpr case=end
 */
