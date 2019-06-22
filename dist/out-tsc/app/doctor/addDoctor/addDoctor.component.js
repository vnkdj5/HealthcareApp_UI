var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Doctor } from "./../../_models/Doctor";
import { NotificationsService } from "angular2-notifications";
import { Validators } from "@angular/forms";
import { DoctorServiceService } from "./../../_services/doctor-service.service";
import { FormBuilder } from "@angular/forms";
import { Component } from "@angular/core";
var AddDoctorComponent = /** @class */ (function () {
    function AddDoctorComponent(formBuilder, doctorService, notify) {
        this.formBuilder = formBuilder;
        this.doctorService = doctorService;
        this.notify = notify;
        this.loading = false;
        this.submitted = false;
        this.returnUrl = "";
        this.message = "";
        this.error = "";
    }
    AddDoctorComponent.prototype.ngOnInit = function () {
        this.addDocForm = this.formBuilder.group({
            firstName: ["", [Validators.required]],
            lastName: ["", [Validators.required]],
            emailId: ["", [Validators.required]],
            password: ["123456", [Validators.required, Validators.minLength(6)]],
            specialization: ["", [Validators.required]],
            degree: ["", [Validators.required]],
            mobileNo: ["", []]
        });
        this.savedUser = JSON.parse(localStorage.getItem("currentUser"));
        this.userType = localStorage.getItem("userType");
    };
    Object.defineProperty(AddDoctorComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.addDocForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddDoctorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.addDocForm.invalid)
            return;
        this.loading = true;
        var doc = new Doctor(this.addDocForm.value);
        console.log(" Doc info:", doc);
        this.doctorService.addDoctor(doc).subscribe(function (data) {
            _this.loading = false;
            _this.message = "Doctor(ID:" + data.id + ") details are added successfully.";
            _this.notify.success("Success", "Doctor(ID:" + data.id + ") details are added successfully.", {
                timeOut: 5000,
                position: ["middle", "center"],
                preventDuplicates: true
            });
            _this.error = "";
        }, function (error) {
            _this.loading = false;
            _this.error = error;
            _this.message = "";
            _this.notify.error("Server Error", "Unable to add doctor", {
                timeOut: 5000,
                position: ["middle", "center"],
                preventDuplicates: true
            });
        });
    };
    AddDoctorComponent = __decorate([
        Component({
            selector: "app-addDoctor",
            templateUrl: "./addDoctor.component.html",
            styleUrls: ["./addDoctor.component.css"]
        }),
        __metadata("design:paramtypes", [FormBuilder,
            DoctorServiceService,
            NotificationsService])
    ], AddDoctorComponent);
    return AddDoctorComponent;
}());
export { AddDoctorComponent };
//# sourceMappingURL=addDoctor.component.js.map