import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  getTodo() {
    return [{
        labelText: 'Taste JavaScript', inputValue: 'Create a TodoMVC template',
        inputDate: 'Fri Apr 15 1988 00:00:00 GMT-0700', isChecked: true
      },
      {
        labelText: 'Buy a unicorn', inputValue: 'Rule the web',
        inputDate: 'Fri Apr 15 1988 00:00:00 GMT-0700', isChecked: false
      }];
  }
}
