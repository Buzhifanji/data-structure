import { CircularQueue } from '@data-structure/queue/CircularQueue';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})

export class TestCircularQueue extends CircularQueue {
    constructor() {
        super(10)
    }
    enQueue(value) {
        const result = this.insert(value)
        if(result) {
            console.log(`入列元素： ${value}`)
        } else {
            console.log('队列已满')
        }
        console.log(`队列中元素的数量${this.size()}`)
    }
    
    deQueue() {
        const {value, isDelete} = this.delete();
        if(isDelete) {
            console.log(`出列元素： ${value}`)
        } else {
            console.log('队列已清空')
        }
        console.log(`队列中元素的数量${this.size()}`)
    }
    clearQueue() {
        this.clear();      
    }
}