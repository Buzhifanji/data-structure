/**
 *  循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环
 *  好处是我们可以利用这个队列之前用过的空间
 *  在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。(js数组不固定内存，但其它语言未必是)
 */
import { Injectable } from '@angular/core';
interface deleteTye {
    value: any,
    isDelete: boolean,
}

@Injectable({
    providedIn: 'root'
})
// 循环队列
export class CircularQueue {
    //数组固定长度
    private readonly len: number; 
    private head: number = -1;   // 队列的起始位置
    private tail: number = -1;   // 队列的结束位置
    private circularQueueArr: Array<any> = [];

    constructor(len: number) {
        this.len = len;  
        this.circularQueueArr = new Array(len)
    }

    /**
     * 插入
     * @param value 
     * @return true: 添加成功；false： 队列已满，添加失败
     */
    insert(value: any): boolean {
        let result = false;       
        if (!this.isFull()) {
            if(this.tail === -1) {
                this.head = 0;
            }
            if(this.tail === this.len) {
                this.tail = 0
            } else {
                this.tail++
            }
            this.circularQueueArr[this.tail] = value
            result = true;
        } 
        return result;
    }

    // 删除
    delete(): deleteTye {
        const result: deleteTye = {
            value: null,
            isDelete: false,
        } 
        if (!this.isEmpty()) {
            const ele = this.circularQueueArr[this.head]
            this.circularQueueArr[this.head] = null;
            if(this.head === this.len) {
                
                this.head = 0;
            } else {
                
                this.head++
            }
            Object.assign(result, {value: ele, isDelete: true})
        }
        return result
    }

    // 队列是否为空
    isEmpty(): boolean {
        return this.head === -1
    }

    // 队列是否已满
    isFull(): boolean {
        return ((this.tail + 1) % this.len) === this.head;
    }

    // 返回队列第一项
    front(): any {
        return this.circularQueueArr[this.head];
    }

    // 返回队列最后一项
    last(): any {
        return this.circularQueueArr[this.tail];
    }

    // 清空队列
    clear(): void {
        this.head = -1;
        this.tail = -1;
        this.circularQueueArr.map(e => {return null})
    }

    // 查看队列中元素的数量
    size(): number {
        const cache = Math.abs(this.tail - this.head)
        let result = this.len
        if(cache !== this.len) {
            result = this.len - cache
        } 
        return result;
    }
}