import { Component } from '@angular/core';
import { TestQueue } from '@data-structure/queue/testQueue';

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
        { name: '入列', id: 100 , },
        { name: '出列', id: 101 },
      ],
    },
    {
      title: '循环队列',
      action: [
        { name: '入列', id: 110 },
        { name: '出列', id: 111 },
      ],
    },
  ]
  constructor(private testQueue: TestQueue) {

  }

  testAction(id) {
    switch (id) {
      case 100:   // 队列入列
        this.testQueue.enQueue()
        break;
      case 101:   // 队列出列
        this.testQueue.deQueue()
        break;
    }

  }

}
