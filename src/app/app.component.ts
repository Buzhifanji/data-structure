import { Component } from '@angular/core';
import { TestQueue } from '@data-structure/queue/testQueue';
import { TestCircularQueue } from '@data-structure/queue/testCircularQueue';
import { StackTest } from '@data-structure/stack/stackTest';

import { QueueEnum, CircularQueueEnum, StackEnum} from '@app/testEnum.ts';

interface dataType {
  name: string,
  id: number,
} 

interface titleType {
  title: string,
  action: Array<dataType>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
  
export class AppComponent {
  data: Array<titleType> = [
    {
      title: '队列',
      action: [
        { name: '入列', id: QueueEnum.in , },
        { name: '出列', id: QueueEnum.out },
      ],
    },
    {
      title: '循环队列',
      action: [
        { name: '入列', id: CircularQueueEnum.in },
        { name: '出列', id: CircularQueueEnum.out },
        { name: '清空', id: CircularQueueEnum.clear },
      ],
    },
    {
      title: '栈',
      action: [
        { name: '入栈', id: StackEnum.in },
        { name: '出栈', id: StackEnum.out },
        { name: '栈顶', id: StackEnum.top },
      ],
    },
  ]
  constructor(private testQueue: TestQueue,
              private testCircularQueue: TestCircularQueue,
              private testStack: StackTest) {

  }

  testAction(id) {
    const num = Math.ceil(Math.random() * 100)
    switch (id) {
      case QueueEnum.in:   // 队列入列
        this.testQueue.enQueue(num)
        break;
      case QueueEnum.out:   // 队列出列
        this.testQueue.deQueue()
        break;
      case CircularQueueEnum.in:   // 循环队列入列
        this.testCircularQueue.enQueue(num)
        console.log(this.testCircularQueue)
        break;
      case CircularQueueEnum.out:   // 循环队列出列
        this.testCircularQueue.deQueue()
        console.log(this.testCircularQueue)
        break;
      case CircularQueueEnum.clear:   // 循环队列出列
        this.testCircularQueue.clearQueue()
        console.log(this.testCircularQueue)
        break;
      case StackEnum.in:    // 入栈
        this.testStack.enStack(num)
        break;
      case StackEnum.out:    // 出栈
        this.testStack.deStack()
        break;
      case StackEnum.top:    // 栈顶
        this.testStack.top()
        break;
    }

  }

}
