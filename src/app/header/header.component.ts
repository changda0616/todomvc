import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  title = `Todos`;
  inputHolder = `What needs to be done`;
  ngOnInit() {
  }
  handleClick(e) {
    console.log(e);
  }
}
