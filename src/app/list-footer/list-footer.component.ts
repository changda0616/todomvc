import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-footer',
  templateUrl: './list-footer.component.html',
  styleUrls: ['./list-footer.component.css']
})
export class ListFooterComponent implements OnInit {
  @Input() todos: any[];
  @Output() clearCompleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClear() {
    this.clearCompleted.emit();
  }

}
