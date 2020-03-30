import { Component } from '@angular/core';

interface MenuType {
  name: string,
  path: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
  
export class AppComponent {
  menu: Array<MenuType> = [
    {name: '队列', path: '/queue'},
    {name: '栈', path: '/stack'},
  ]
  
  constructor() {}

}
