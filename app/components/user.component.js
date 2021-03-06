"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        this.name = "John Doe";
        this.email = "john@gmail.com";
        this.address = {
            street: "21 street",
            city: "Kochi",
            state: "Kerala"
        };
        this.hobbies = ['Movies', 'Music', 'Cricket'];
        this.showHobbies = false;
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (!this.showHobbies)
            this.showHobbies = true;
        else
            this.showHobbies = false;
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            template: "\n    <h1>User Component</h1>\n    <p>User Name :{{name}}\n    <p>{{name}}</p>\n    <p>{{email}}</p>\n    <p>{{address.street}}</p>\n    <p>{{address.city}}</p>\n    <p>{{address.state}}</p>\n    <p><b>Hobbies</b></p>\n    <button (click)=\"toggleHobbies()\">{{showHobbies? \"Hide Hobbies\":\"Show Hobbies\"}}</button>\n    <div *ngIf=\"showHobbies\">\n    <ul>\n    <li *ngFor=\"let hobby of hobbies\">{{hobby}}</li>\n    </ul>\n    </div>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map