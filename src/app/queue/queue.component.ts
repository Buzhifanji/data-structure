import { Component, OnInit } from '@angular/core';
import { TestQueue } from '@data-structure/queue/testQueue';
import { TestCircularQueue } from '@data-structure/queue/testCircularQueue';
import { QueueEnum, CircularQueueEnum} from './queue-enum.enum';
import { QueueType } from '@app/queue/queue-type';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  constructor(private testQueue: TestQueue,
              private testCircularQueue: TestCircularQueue,) { }

  ngOnInit(): void {
  }
  data: Array<QueueType> = [
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
  ]
  testAction(id: number): void {
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
    }
  }
}
