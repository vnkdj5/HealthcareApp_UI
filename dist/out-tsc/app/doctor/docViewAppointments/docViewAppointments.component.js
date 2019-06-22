var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AppointmentServiceService } from './../../_services/appointmentService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
var DocViewAppointmentsComponent = /** @class */ (function () {
    function DocViewAppointmentsComponent(route, router, appointmentSevice) {
        this.route = route;
        this.router = router;
        this.appointmentSevice = appointmentSevice;
        this.message = "";
        this.error = false;
        this.aList = [];
    }
    DocViewAppointmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userType = localStorage.getItem("userType");
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        try {
            var doctorId = this.user.id;
        }
        catch (error) {
        }
        this.appointmentSevice.getDoctorsAppointment(doctorId).subscribe(function (data) {
            _this.aList = data;
            console.log("REceived data: ", data);
        }, function (error) {
            error = true;
            console.log("VView appointments: ", error);
        });
    };
    DocViewAppointmentsComponent = __decorate([
        Component({
            selector: 'app-docViewAppointments',
            templateUrl: './docViewAppointments.component.html',
            styleUrls: ['./docViewAppointments.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            AppointmentServiceService])
    ], DocViewAppointmentsComponent);
    return DocViewAppointmentsComponent;
}());
export { DocViewAppointmentsComponent };
//# sourceMappingURL=docViewAppointments.component.js.map