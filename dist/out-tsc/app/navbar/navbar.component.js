var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.loggedIn = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.userType = localStorage.getItem("userType");
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        console.log(this.user);
        // alert("user type:"+this.userType);
    };
    NavbarComponent.prototype.getUserType = function () {
        this.userType = localStorage.getItem("userType");
        if (this.userType == null || this.userType == undefined)
            return "";
        else
            return this.userType;
    };
    NavbarComponent = __decorate([
        Component({
            selector: "app-navbar",
            templateUrl: "./navbar.component.html",
            styleUrls: ["./navbar.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map