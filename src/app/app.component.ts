import { Component } from '@angular/core';
import { ButtonAddComponent } from './button-add/button-add.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  appComponents: Array<ButtonAddComponent> = [];

  addComponent() {
     console.log(this.appComponents);
      this.appComponents.push(new ButtonAddComponent());
  } 
}
