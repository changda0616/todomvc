import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
interface Todoers {
  labelText: string;
  inputValue: string;
  inputDate: string;
  isChecked: boolean;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  constructor(private dataService: DataService) {}

  listTitle = `hello from component`;
  todoItems: Todoers[] = [];
  todoToggle = false;

  ngOnInit() {
    this.todoItems = this.dataService.getTodo();
  }

  handleItemChange() {
    this.todoToggle = true;
    setTimeout(() => {this.todoToggle = false; }, 1500);
  }

}
