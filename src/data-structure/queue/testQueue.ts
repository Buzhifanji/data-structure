import { Queue } from '@data-structure/queue/queue';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TestQueue {
    constructor(private queue: Queue) { }
    
    enQueue() {
        const num = Math.ceil(Math.random() * 100)
        this.queue.insert(num);
        console.log(`入列元素： ${num}`)
        console.log(this.queue)
    }
    deQueue() {
        const result = this.queue.delete();
        if (result === false) {
            console.log('队列已清空')
        } else {
            console.log(`出列元素： ${result}`)
            console.log(this.queue)
        }
    }
}