var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { UserService } from "./../../_services/user.service";
import { Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Component } from "@angular/core";
import { User } from "src/app/_models";
import { NotificationsService } from "angular2-notifications";
var PersonalInfoPatientComponent = /** @class */ (function () {
    function PersonalInfoPatientComponent(formBuilder, route, router, patientService, notify) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.patientService = patientService;
        this.notify = notify;
        this.submitted = false;
        this.loading = false;
        this.error = "";
        this.message = "";
    }
    PersonalInfoPatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientInfoForm = this.formBuilder.group({
            id: ["", [Validators.required]],
            firstName: ["", [Validators.required]],
            lastName: ["", [Validators.required]],
            dateOfBirth: ["", []],
            email: ["", [Validators.required]],
            address: ["", []]
        });
        try {
            this.savedUser.id = this.route.snapshot.queryParams["id"];
        }
        catch (eror) { }
        this.savedUser = JSON.parse(localStorage.getItem("currentUser"));
        this.patientService.getPatientDetails(this.savedUser.id).subscribe(function (data) {
            if (data.hasOwnProperty("password"))
                delete data.password;
            _this.patientInfoForm.setValue(data);
        }, function (error) {
            console.log("Profile Load Error: ", error);
            error = "Cannot load Profile Info. Please try later.";
        });
    };
    Object.defineProperty(PersonalInfoPatientComponent.prototype, "f", {
        get: function () {
            return this.patientInfoForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    PersonalInfoPatientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.patientInfoForm.invalid)
            return;
        this.loading = true;
        var user = new User(this.patientInfoForm.value);
        //console.log("current user info:", user);
        this.patientService.updatePatient(user).subscribe(function (data) {
            _this.loading = false;
            _this.message = "Patient details are updated successfully.";
            _this.notify.success("Success", "Patient details are updated successfully.", {
                timeOut: 5000,
                position: ["middle", "center"],
                preventDuplicates: true
            });
            _this.error = "";
        }, function (error) {
            _this.loading = false;
            _this.error = error;
            _this.message = "";
            _this.notify.error("Error", "Patient details update failed.", {
                timeOut: 5000,
                position: ["middle", "center"],
                preventDuplicates: true
            });
        });
    };
    PersonalInfoPatientComponent = __decorate([
        Component({
            selector: "app-personalInfoPatient",
            templateUrl: "./personalInfoPatient.component.html",
            styleUrls: ["./personalInfoPatient.component.css"]
        }),
        __metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            Router,
            UserService,
            NotificationsService])
    ], PersonalInfoPatientComponent);
    return PersonalInfoPatientComponent;
}());
export { PersonalInfoPatientComponent };
//# sourceMappingURL=personalInfoPatient.component.js.map