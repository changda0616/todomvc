import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface Todoers {
  labelText: string;
  inputDate: string;
  isChecked: boolean;
}
@Injectable()
export class DataService {

  constructor() { }

  _Todes = new Subject<Todoers[]>();

  // Fake data source
  todoes: Todoers[] = [{
        labelText: 'Taste JavaScript',
        inputDate: 'Fri Apr 15 1988 00:00:00 GMT-0700', isChecked: true
      },
      {
        labelText: 'Buy a unicorn',
        inputDate: 'Fri Apr 15 1988 00:00:00 GMT-0700', isChecked: false
      }];

  getTodo() {
    this._Todes.next(this.todoes);
  }

  removeTodo(items) {
    items = items.filter(item => item.isChecked === false);
    this._Todes.next(items);
  }

}
