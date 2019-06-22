var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { AuthenticationService } from './../_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { first } from "rxjs/operators";
var LoginDoctorComponent = /** @class */ (function () {
    function LoginDoctorComponent(formBuilder, route, router, authenticationService, notify) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.notify = notify;
        this.loading = false;
        this.submitted = false;
        this.error = "";
    }
    LoginDoctorComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
        //console.log(this.returnUrl);
    };
    Object.defineProperty(LoginDoctorComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginDoctorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService
            .loginDoctor(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(function (data) {
            //console.log("data received: ", data);
            _this.router.navigate([_this.returnUrl]);
            //console.log(";pcalstorage",localStorage.getItem("currentUser"));
            _this.notify.success("Success", "Login Successful.", {
                timeOut: 5000,
                position: ["middle", "center"],
                preventDuplicates: true
            });
        }, function (error) {
            _this.error = error;
            _this.loading = false;
            _this.notify.error("Login Failed", "Incorrect userId or password.", {
                timeOut: 5000,
                position: ["middle", "center"],
                preventDuplicates: true
            });
        });
    };
    LoginDoctorComponent = __decorate([
        Component({
            selector: 'app-loginDoctor',
            templateUrl: './loginDoctor.component.html',
            styleUrls: ['./loginDoctor.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            Router,
            AuthenticationService,
            NotificationsService])
    ], LoginDoctorComponent);
    return LoginDoctorComponent;
}());
export { LoginDoctorComponent };
//# sourceMappingURL=loginDoctor.component.js.map