/*
 * @lc app=leetcode.cn id=295 lang=javascript
 * @lcpr version=30402
 *
 * [295] 数据流的中位数
 */


import {ListNode} from "../common/listNode.js";
import {TreeNode} from "../common/treeNode.js";

// @lc code=start

var MedianFinder = function() {
    // 最大堆，存储较小的一半数据
    this.maxHeap = [];
    // 最小堆，存储较大的一半数据
    this.minHeap = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // 先将元素加入最大堆
    this.maxHeap.push(num);
    // 向上调整最大堆
    this.siftUpMax(this.maxHeap, this.maxHeap.length - 1);
    
    // 将最大堆的堆顶元素移到最小堆
    this.minHeap.push(this.maxHeap[0]);
    this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1];
    this.maxHeap.pop();
    this.siftDownMax(this.maxHeap, 0);
    this.siftUpMin(this.minHeap, this.minHeap.length - 1);
    
    // 平衡两个堆的大小
    if (this.maxHeap.length < this.minHeap.length) {
        this.maxHeap.push(this.minHeap[0]);
        this.minHeap[0] = this.minHeap[this.minHeap.length - 1];
        this.minHeap.pop();
        this.siftDownMin(this.minHeap, 0);
        this.siftUpMax(this.maxHeap, this.maxHeap.length - 1);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.length > this.minHeap.length) {
        return this.maxHeap[0];
    } else {
        return (this.maxHeap[0] + this.minHeap[0]) / 2;
    }
};

// 最大堆向上调整
MedianFinder.prototype.siftUpMax = function(heap, i) {
    let parent = Math.floor((i - 1) / 2);
    while (i > 0 && heap[i] > heap[parent]) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
        parent = Math.floor((i - 1) / 2);
    }
};

// 最大堆向下调整
MedianFinder.prototype.siftDownMax = function(heap, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    if (left < heap.length && heap[left] > heap[largest]) {
        largest = left;
    }
    
    if (right < heap.length && heap[right] > heap[largest]) {
        largest = right;
    }
    
    if (largest !== i) {
        [heap[i], heap[largest]] = [heap[largest], heap[i]];
        this.siftDownMax(heap, largest);
    }
};

// 最小堆向上调整
MedianFinder.prototype.siftUpMin = function(heap, i) {
    let parent = Math.floor((i - 1) / 2);
    while (i > 0 && heap[i] < heap[parent]) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
        parent = Math.floor((i - 1) / 2);
    }
};

// 最小堆向下调整
MedianFinder.prototype.siftDownMin = function(heap, i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    if (left < heap.length && heap[left] < heap[smallest]) {
        smallest = left;
    }
    
    if (right < heap.length && heap[right] < heap[smallest]) {
        smallest = right;
    }
    
    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        this.siftDownMin(heap, smallest);
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

// your test code here





/*
// @lcpr case=start
// ["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n[[],[1],[2],[],[3],[]]\n
// @lcpr case=end

 */

