/*
 *  队列是典型的 FIFO 数据结构
 *  插入（insert）操作也称作入队（enqueue），新元素始终被添加在队列的末尾。
 *  删除（delete）操作也被称为出队（dequeue)。 你只能移除第一个元素。
 * 
 * 缺点：随着起始指针的移动，浪费了越来越多的空间
*/

import { Injectable } from '@angular/core';

// 队列

@Injectable({
    providedIn: 'root'
})

export class Queue {
    private queueArr: Array<any> = []
    constructor() {

    }
    // 插入
    insert(value): void {
        this.queueArr.push(value);
    }

    // 删除
    delete(): any {
        let result = false
        if (!this.isEmpty()) {
            result = this.queueArr.shift();
        }
        return result
    }

    // 查看队列中元素的数量
    size(): number {
        return this.queueArr.length;
    }

    // 队列是否为空
    isEmpty(): boolean {
        return this.queueArr.length === 0;
    }

    // 清空队列
    clear(): void {
        this.queueArr.length = 0;
    }

}