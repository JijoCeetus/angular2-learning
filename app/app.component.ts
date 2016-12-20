import { Component } from '@angular/core';
import { UserComponent } from './components/user.component';

@Component({
  selector: 'my-app',
  template: `
            <h1>Welcome</h1>
            <user></user>
             `,
})
export class AppComponent {
  name = 'Angular';
  email = "j@gmail.com";
  address = {
    street: "2nd street",
    city: "cochin",
    state: "kerala"
  };
}
