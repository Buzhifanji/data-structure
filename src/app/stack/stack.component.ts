import { Component, OnInit } from '@angular/core';
import { QueueType } from '@app/queue/queue-type';
import { StackEnum, MinStackEnum } from './stack-enum.enum';
import { StackTest } from '@data-structure/stack/stackTest';
import { MinStackTest } from '@data-structure/stack/MinStackTest';
import { Stack } from '@data-structure/stack/stack';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  constructor(
    private testStack: StackTest,
    private minStackTest: MinStackTest,
    private stack: Stack) { }

  ngOnInit(): void {
  }
  tip: string = '给定一个只包括 (，)，{，}，[，] 的字符串，判断字符串是否有效'
  brackets: string = ''       // 有效的括号
  bracketsResult: string = '';
  data: Array<QueueType> = [
    {
      title: '栈',
      action: [
        { name: '入栈', id: StackEnum.in },
        { name: '出栈', id: StackEnum.out },
        { name: '栈顶', id: StackEnum.top },
      ],
    },
    {
      title: '最小栈',
      action: [
        { name: '入栈', id: MinStackEnum.in },
        { name: '出栈', id: MinStackEnum.out },
        { name: '栈顶', id: MinStackEnum.top },
        { name: 'min', id: MinStackEnum.min },
      ],
    },
  ]
  testAction(id) {
    const num = Math.ceil(Math.random() * 100)
    switch (id) {
      case StackEnum.in:    // 入栈
        this.testStack.enStack(num)
        break;
      case StackEnum.out:    // 出栈
        this.testStack.deStack()
        break;
      case StackEnum.top:    // 栈顶
        this.testStack.top()
        break;
      case MinStackEnum.in:    // 入栈
        this.minStackTest.enStack(num)
        break;
      case MinStackEnum.out:    // 出栈
        this.minStackTest.deStack()
        break;
      case MinStackEnum.top:    // 栈顶
        this.minStackTest.top()
        break;
      case MinStackEnum.min:    // 栈顶
        this.minStackTest.getMin()
        break;
    }
  }
  confirmBrackets() {
    // 检测输入数据只能是'(){}[]'
    const strArr = ['(', ')', '{', '}', '[', ']']
    for (const item of this.brackets) {
      if (!strArr.includes(item)) {
        alert(`只能输入(){}[]`)
        return
      }
    }

    // 设置映射数据
    const map = new Map()
    map.set('(', ')')
    map.set('{', '}')
    map.set('[', ']')

    const { stack } = this
    for (const item of this.brackets) {
      const top = stack.top()
      if (top) {
        if (map.get(top) === item) {
          stack.pop()
        } else {
          stack.push(item)
        }
      } else {  
        stack.push(item)
      }
    }
    this.bracketsResult = stack.isEmpty() ? 'true' : 'false'
    stack.clear()
  }
  
}
