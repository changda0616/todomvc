import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // Interpolation
  title = `Todos`;

  // [ Property ] Binding
  inputHolder = `What needs to be done`;

  // Two-way [( ng-model )] Binding
  inputValue = `This is the input value from component`;

  ngOnInit() {
  }

  // ( Event ) Binding
  handleClick(e) {
    this.title = e.target.value;
    console.log(this.inputValue);
  }

}
