import { MinStack } from './minStack';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MinStackTest {
    constructor(private minStack: MinStack) {}
    enStack(value) {
        this.minStack.push(value)
        console.log(`入栈元素： ${value}`)
        console.log(this.minStack)
    }
    deStack() {
        const { value, isDelete } = this.minStack.pop();
        if(isDelete) {
            console.log(`出栈元素： ${value}`)
        } else {
            console.log('栈已被清空')
        }
    }
    top() {
        const value = this.minStack.top()
        if(value) {
            console.log(`栈顶元素： ${value}`)
        } else {
            console.log('栈已被清空')
        }
    }
    getMin() {
        if(!this.minStack.isEmpty()) {
            console.log(`最小栈元素：${this.minStack.getMin()}`)
        } else {
            console.log('栈已被清空')
        }
    }
}