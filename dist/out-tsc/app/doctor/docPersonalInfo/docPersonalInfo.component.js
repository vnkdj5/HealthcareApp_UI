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
import { DoctorServiceService } from './../../_services/doctor-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Doctor } from 'src/app/_models/Doctor';
import { NotificationsService } from 'angular2-notifications';
var DocPersonalInfoComponent = /** @class */ (function () {
    function DocPersonalInfoComponent(formBuilder, route, router, doctorService, notify) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.doctorService = doctorService;
        this.notify = notify;
        this.submitted = false;
        this.loading = false;
        this.error = "";
        this.message = "";
    }
    DocPersonalInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DocForm = this.formBuilder.group({
            id: ["", [Validators.required]],
            firstName: ["", [Validators.required]],
            lastName: ["", [Validators.required]],
            emailId: ["", [Validators.required]],
            specialization: ["", [Validators.required]],
            degree: ["", [Validators.required]],
            mobileNo: ["", []]
        });
        try {
            this.savedUser.id = this.route.snapshot.queryParams["id"];
        }
        catch (eror) { }
        this.savedUser = JSON.parse(localStorage.getItem("currentUser"));
        this.doctorService.getDoctorDetails(this.savedUser.id).subscribe(function (data) {
            if (data.hasOwnProperty("password"))
                delete data.password;
            _this.DocForm.setValue(data);
        }, function (error) {
            console.log("Profile Load Error: ", error);
            error = "Cannot load Profile Info. Please try later.";
        });
    };
    Object.defineProperty(DocPersonalInfoComponent.prototype, "f", {
        get: function () {
            return this.DocForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    DocPersonalInfoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.DocForm.invalid)
            return;
        this.loading = true;
        var user = new Doctor(this.DocForm.value);
        //console.log("current user info:", user);
        this.doctorService.updateDoctorDetails(user).subscribe(function (data) {
            _this.loading = false;
            _this.message = "Doctor details are updated successfully.";
            _this.notify.success("Success", "Doctor details are updated successfully.", {
                timeOut: 5000,
                position: ["middle", "center"],
                preventDuplicates: true
            });
            _this.error = "";
        }, function (error) {
            _this.loading = false;
            _this.error = error;
            _this.message = "";
            _this.notify.error("Error", "Doctor details update failed.", {
                timeOut: 5000,
                position: ["middle", "center"],
                preventDuplicates: true
            });
        });
    };
    DocPersonalInfoComponent = __decorate([
        Component({
            selector: 'app-docPersonalInfo',
            templateUrl: './docPersonalInfo.component.html',
            styleUrls: ['./docPersonalInfo.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            Router,
            DoctorServiceService,
            NotificationsService])
    ], DocPersonalInfoComponent);
    return DocPersonalInfoComponent;
}());
export { DocPersonalInfoComponent };
//# sourceMappingURL=docPersonalInfo.component.js.map