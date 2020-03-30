import { Stack } from '@data-structure/stack/stack';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MinStack extends Stack {
    private min: number = null;
    constructor() {
        super()
    }
     /**
     * 入栈
     * @return 栈里元素个数 
     */
    push(value): number {
        if(super.isEmpty()) {
            this.min = value
        } else if(value < this.min) {
            this.min = value
        }
        super.push(value);
        return super.size();
    }
    getMin(): number {
        return this.min;
    }
 }