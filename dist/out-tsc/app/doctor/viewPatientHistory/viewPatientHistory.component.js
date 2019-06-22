var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AppointmentServiceService } from "./../../_services/appointmentService.service";
import { UserService } from "./../../_services/user.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Component } from "@angular/core";
import { NotificationsService } from "angular2-notifications";
var ViewPatientHistoryComponent = /** @class */ (function () {
    function ViewPatientHistoryComponent(formBuilder, route, router, patientService, notify, appointmentService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.patientService = patientService;
        this.notify = notify;
        this.appointmentService = appointmentService;
    }
    ViewPatientHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientId = this.route.snapshot.queryParams["patientId"] || null;
        this.patientService.getPatientDetails(this.patientId).subscribe(function (data) {
            _this.patientDetails = data;
        }, function (error) {
            _this.notify.error("Error", error.message, {
                timeOut: 5000
            });
        });
        //Getting appointment history
        this.appointmentService
            .getPatientAppointments(this.patientId)
            .subscribe(function (data) {
            _this.aList = data;
        }, function (error) {
            console.log(error);
            _this.notify.error("Error", error.message, {
                timeOut: 5000
            });
        });
    };
    ViewPatientHistoryComponent = __decorate([
        Component({
            selector: "app-viewPatientHistory",
            templateUrl: "./viewPatientHistory.component.html",
            styleUrls: ["./viewPatientHistory.component.css"]
        }),
        __metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            Router,
            UserService,
            NotificationsService,
            AppointmentServiceService])
    ], ViewPatientHistoryComponent);
    return ViewPatientHistoryComponent;
}());
export { ViewPatientHistoryComponent };
//# sourceMappingURL=viewPatientHistory.component.js.map