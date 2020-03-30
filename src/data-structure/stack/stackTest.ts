import { Stack } from '@data-structure/stack/stack';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StackTest {
    constructor(private stack: Stack) {}

    enStack(value) {
        this.stack.push(value)
        console.log(`入栈元素： ${value}`)
        console.log(this.stack)
    }
    deStack() {
        const { value, isDelete } = this.stack.pop();
        if(isDelete) {
            console.log(`出栈元素： ${value}`)
        } else {
            console.log('栈已被清空')
        }
    }
    top() {
        const value = this.stack.top()
        if(value) {
            console.log(`栈顶元素： ${value}`)
        } else {
            console.log('栈已被清空')
        }
    }
}