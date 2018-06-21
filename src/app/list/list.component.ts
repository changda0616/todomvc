import { Component, OnInit } from '@angular/core';
interface Todoers {
  labelText: string;
  inputValue: string;
  isChecked: boolean;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  constructor() { }

  listTitle = `hello from component`;
  todoItems: Todoers[] = [];
  todoToggle = false;

  ngOnInit() {
    this.todoItems = [
      {labelText: 'Taste JavaScript', inputValue: 'Create a TodoMVC template', isChecked: true},
      {labelText: 'Buy a unicorn', inputValue: 'Rule the web', isChecked: false}
    ];
  }
  handleItemChange() {
    this.todoToggle = true;
    setTimeout(() => {this.todoToggle = false; }, 1500);
  }
}
