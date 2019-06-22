var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AppointmentServiceService } from "src/app/_services/appointmentService.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component } from "@angular/core";
var PatientViewAppointmentsComponent = /** @class */ (function () {
    function PatientViewAppointmentsComponent(route, router, appointmentSevice) {
        this.route = route;
        this.router = router;
        this.appointmentSevice = appointmentSevice;
        this.message = "";
        this.error = false;
        this.aList = [];
    }
    PatientViewAppointmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userType = localStorage.getItem("userType");
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        try {
            var patientId = this.user.id;
        }
        catch (error) {
        }
        this.appointmentSevice.getPatientAppointments(patientId).subscribe(function (data) {
            _this.aList = data;
            console.log("REceived data: ", data);
        }, function (error) {
            error = true;
            console.log("VView appointments: ", error);
        });
    };
    PatientViewAppointmentsComponent = __decorate([
        Component({
            selector: "app-patient-viewAppointments",
            templateUrl: "./patient-viewAppointments.component.html",
            styleUrls: ["./patient-viewAppointments.component.css"]
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            AppointmentServiceService])
    ], PatientViewAppointmentsComponent);
    return PatientViewAppointmentsComponent;
}());
export { PatientViewAppointmentsComponent };
//# sourceMappingURL=patient-viewAppointments.component.js.map