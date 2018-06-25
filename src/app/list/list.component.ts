import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService, Todoers } from '../data.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnDestroy {

  // Service DI
  constructor(private dataService: DataService) {}

  // Demo for {{ Interpolation }}
  listTitle = `hello from component`;

  // Data fro ngFor
  todoItems: Todoers[] = [];

  // Toggle Status foor ngIf
  todoToggle = false;

  // Subscription from rxjs
  todoSubscription: Subscription;


  ngOnInit() {
    this.todoSubscription = this.dataService._Todes.subscribe(todoes => {
      this.todoItems = todoes;
    });
    this.dataService.getTodo();
  }

  handleItemChange() {
    this.todoToggle = true;
    setTimeout(() => {this.todoToggle = false; }, 1500);
  }

  clearCompleted() {
    this.dataService.removeTodo(this.todoItems);
  }

  ngOnDestroy() {
    // When user navigate to other to component, should unsubscribe the subscription to prvent avoid memory leaks.
    this.todoSubscription.unsubscribe();
  }

}
