var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NotificationsService } from 'angular2-notifications';
import { DoctorServiceService } from './../../_services/doctor-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
var ViewDoctorsComponent = /** @class */ (function () {
    function ViewDoctorsComponent(route, router, doctorService, notify) {
        this.route = route;
        this.router = router;
        this.doctorService = doctorService;
        this.notify = notify;
        this.message = "";
        this.error = false;
        this.aList = [];
    }
    ViewDoctorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userType = localStorage.getItem("userType");
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        try {
            var docId = this.user.id;
        }
        catch (error) {
        }
        this.doctorService.deleteDoctor(docId).subscribe(function (data) {
            _this.aList = data;
            // console.log("REceived data: ", data);
            _this.notify.success("Success", "octor List loaded.");
        }, function (error) {
            error = true;
            _this.notify.error("Error", "Error while loading doctors' details");
            console.log("View Doctor ERROR:", error);
        });
    };
    ViewDoctorsComponent.prototype.deleteDoc = function (docId) {
    };
    ViewDoctorsComponent = __decorate([
        Component({
            selector: 'app-viewDoctors',
            templateUrl: './viewDoctors.component.html',
            styleUrls: ['./viewDoctors.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            DoctorServiceService,
            NotificationsService])
    ], ViewDoctorsComponent);
    return ViewDoctorsComponent;
}());
export { ViewDoctorsComponent };
//# sourceMappingURL=viewDoctors.component.js.map