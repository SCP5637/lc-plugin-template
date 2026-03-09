export class PriorityQueue {
    //优先级队列，这里比较器写的默认小根堆
    constructor(compare = (a, b) => a - b) {
        this.data = [];
        this.compare = compare;
    }

    //Length
    size() {
        return this.data.length;
    }

    isEmpty() {
        return this.data.length === 0;
    }

    //Check
    peek() {
        return this.data[0];
    }

    //Enquene
    push(value) {
        this.data.push(value);
        this.#siftUp(this.data.length - 1);
    }

    //Dequene
    pop() {
        if (this.data.length === 0) return undefined;
        const top = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = last;
            this.#siftDown(0);
        }
        return top;
    }

    #siftUp(index) {
        while (index > 0) {
            const parent = (index - 1) >> 1;
            if (this.compare(this.data[index], this.data[parent]) >= 0) break;
            [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
            index = parent;
        }
    }

    #siftDown(index) {
        const n = this.data.length;
        while (true) {
            let best = index;
            const left = index * 2 + 1;
            const right = left + 1;

            if (left < n && this.compare(this.data[left], this.data[best]) < 0) {
                best = left;
            }
            if (right < n && this.compare(this.data[right], this.data[best]) < 0) {
                best = right;
            }
            if (best === index) break;

            [this.data[index], this.data[best]] = [this.data[best], this.data[index]];
            index = best;
        }
    }
}
