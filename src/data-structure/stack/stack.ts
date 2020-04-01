import { Injectable } from '@angular/core';

interface deleteTye {
    value: any,
    isDelete: boolean,
}

@Injectable({
    providedIn: 'root'
})
    
export class Stack {
    protected stackArr: Array<any> = [];
    /**
     * 入栈
     * @return 栈里元素个数 
     */
    push(value): number {
        this.stackArr.push(value);
        return this.stackArr.length;
    }
    /**
     * 出栈
     * @return deleteTye: {value: 出栈元素， isDelete: 是否出栈(false表示栈列已清空)}
     */
    pop(): deleteTye {
        const result: deleteTye = {
            value: null,
            isDelete: false,
        }
        if (!this.isEmpty()) {
            const value = this.stackArr.pop()
            Object.assign(result, {value, isDelete: true})
        }
        return result;
    }
    // 栈是否已空
    isEmpty(): boolean {
        return this.stackArr.length === 0;
    }
    // 返回栈顶元素
    top(): any {
        let result = null
        if (!this.isEmpty()) {
            const { stackArr } = this;
            result = stackArr[stackArr.length - 1]
        }
        return result
    }
    // 返回栈低元素
    bottom(): any {
        let result = null
        if (!this.isEmpty()) {
            const { stackArr } = this;
            result = stackArr[0]
        }
        return result
    }
    size(): number {
        return this.stackArr.length
    }
    clear(): boolean {
        this.stackArr.length = 0;
        return this.isEmpty();
    }
}