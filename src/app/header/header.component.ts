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
  inputValue = `This is the input value from component`;

  ngOnInit() {
  }
  handleClick(e) {
    // console.log(e);
    this.title = e.target.value;
    console.log(this.inputValue);
  }
}
