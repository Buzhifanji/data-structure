/**
 *  循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环
 *  好处是我们可以利用这个队列之前用过的空间
 *  在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。(js数组不固定内存，但其它语言未必是)
 */
interface deleteTye {
    value: any,
    isDelete: boolean,
}

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
            if((this.tail + 1) === this.len) {
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
        const result: deleteTye = this.getReturnValue();
        if (!this.isEmpty()) {
            const ele = this.circularQueueArr[this.head]
            this.circularQueueArr[this.head] = null;
            if(this.head === this.len) {     // 利用只使用过的内存            
                this.head = 0;
            } else if (this.head === this.tail) {      // 队列只剩下最后一个元素
                this.head = -1;
                this.tail = -1;
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
    front(): deleteTye {
        const result: deleteTye = this.getReturnValue();
        if (!this.isEmpty) {
            const ele = this.circularQueueArr[this.head]
            Object.assign(result, {value: ele, isDelete: true})
        }
        return result;
    }

    // 返回队列最后一项
    last(): deleteTye {
        const result: deleteTye = this.getReturnValue();
        if (!this.isEmpty) {
            const ele = this.circularQueueArr[this.tail]
            Object.assign(result, {value: ele, isDelete: true})
        }
        return result;
    }

    // 清空队列
    clear(): void {
        this.head = -1;
        this.tail = -1;
        for (let i = 0; i < this.len; i++ ) {
            this.circularQueueArr[i] = null;
        }
    }

    // 查看队列中元素的数量
    size(): number {
        let result
        if (this.isEmpty()) {
            result = 0
        } else {
            const temp = this.tail - this.head;
            if (temp > 0) {
                result = temp + 1
            } else if (temp === 0) {
                result = 1;
            } else {
                result = this.len + temp + 1
            }
        }
        return result;
    }
    private getReturnValue(): deleteTye {
        return {
            value: null,
            isDelete: false,
        } 
    }
}