import { CircularQueue } from '@data-structure/queue/CircularQueue';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TestCircularQueue {
    constructor(private circularQueue: CircularQueue) {}

    enQueue() {
        const num = Math.ceil(Math.random() * 100)
        const result = this.circularQueue.insert(num)
        if(result) {
            console.log(`入列元素： ${num}`)
            console.log(this.circularQueue)
        } else {
            console.log('队列已满')
        }
        console.log(this.circularQueue)
    }
    
    deQueue() {
        const {value, isDelete} = this.circularQueue.delete();
        if(value) {
            console.log(`出列元素： ${isDelete}`)
        } else {
            console.log('队列已清空')
        }
        console.log(this.circularQueue)
    }
}