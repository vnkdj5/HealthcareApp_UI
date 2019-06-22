var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Constants } from './../_models/constants';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.BASE_URL = Constants.baseURL;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http
            .post(this.BASE_URL + "/patient/login", {
            id: username,
            password: password
        })
            .pipe(map(function (user) {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ":" + password);
                localStorage.setItem("currentUser", JSON.stringify(user.data));
                localStorage.setItem("userType", "patient");
            }
            return user;
        }));
    };
    AuthenticationService.prototype.register = function (firstName, lastName, emailId, password) {
        return this.http
            .post(this.BASE_URL + "/patient/", {
            firstName: firstName,
            lastName: lastName,
            email: emailId,
            password: password
        })
            .pipe(map(function (user) {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(user.id + ":" + password);
                localStorage.setItem("currentUser", JSON.stringify(user));
                console.log(JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem("currentUser");
        localStorage.removeItem("userType");
    };
    AuthenticationService.prototype.loginDoctor = function (username, password) {
        return this.http
            .post(this.BASE_URL + "/doctor/login", {
            id: username,
            password: password
        })
            .pipe(map(function (user) {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ":" + password);
                localStorage.setItem("currentUser", JSON.stringify(user.data));
                localStorage.setItem("userType", "doctor");
            }
            return user;
        }));
    };
    AuthenticationService = __decorate([
        Injectable({ providedIn: "root" }),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map