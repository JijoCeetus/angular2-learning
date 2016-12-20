import { Component } from "@angular/core";

@Component({
    selector: 'user',
    template: `
    <h1>User Component</h1>
    <p>User Name :{{name}}
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{address.street}}</p>
    <p>{{address.city}}</p>
    <p>{{address.state}}</p>
    <p><b>Hobbies</b></p>
    <button (click)="toggleHobbies()">{{showHobbies? "Hide Hobbies":"Show Hobbies"}}</button>
    <div *ngIf="showHobbies">
    <ul>
    <li *ngFor="let hobby of hobbies">{{hobby}}</li>
    </ul>
    </div>
`,
})

export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;

    constructor() {
        this.name = "John Doe";
        this.email = "john@gmail.com";
        this.address = {
            street: "21 street",
            city: "Kochi",
            state: "Kerala"
        }
        this.hobbies = ['Movies', 'Music', 'Cricket'];
        this.showHobbies = false;
    }

    toggleHobbies() {
        if (!this.showHobbies)
            this.showHobbies = true;
        else
            this.showHobbies = false;
    }

}

interface address {
    street: string;
    city: string;
    state: string;
}
