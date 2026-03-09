export declare class PriorityQueue<T = number> {
    private data;
    private compare;
    constructor(compare?: (a: T, b: T) => number);
    size(): number;
    isEmpty(): boolean;
    peek(): T | undefined;
    push(value: T): void;
    pop(): T | undefined;
}
