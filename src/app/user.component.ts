import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>Hello {{name}}</p>
  <p>This is user</p>
  <input type ="text" (input) = "onUserInput($event)" [value] = "name">`
})


export class UserComponent {
  name = 'Ranjit';
  onUserInput(event){
    this.name = event.target.value;
  }
}
