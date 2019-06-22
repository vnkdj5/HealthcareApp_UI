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
import { Appointment } from "./../../_models/Appointment";
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
var BookAppointmentComponent = /** @class */ (function () {
    function BookAppointmentComponent(formBuilder, route, router, appointmentSevice) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.appointmentSevice = appointmentSevice;
        this.submitted = false;
        this.loading = false;
        this.error = "";
        this.doctors = [
            { id: "1", name: "Skin Specialist[ABC]" },
            { id: "2", name: "DR 2" },
            { id: "3", name: "DR 3" },
            { id: "4", name: "DR 4" }
        ];
    }
    BookAppointmentComponent.prototype.ngOnInit = function () {
        this.bookForm = this.formBuilder.group({
            patientId: ["001", [Validators.required]],
            subject: ["", [Validators.required]],
            visitDate: ["", [Validators.required]],
            timeslot: ["", [Validators.required]],
            description: ["", []],
            doctorId: ["", [Validators.required]]
        });
    };
    Object.defineProperty(BookAppointmentComponent.prototype, "f", {
        get: function () {
            return this.bookForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    BookAppointmentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.bookForm.invalid)
            return;
        this.loading = true;
        var newAppintment = new Appointment(this.bookForm.value);
        console.log("Appointment data:", newAppintment);
        this.appointmentSevice.bookAppointment(newAppintment).subscribe(function (data) {
            alert("Appointment ID:" + data.appointmentId + "has been scheduled successfully");
            _this.router.navigate(['bookAppointment']);
        }, function (error) {
            _this.loading = false;
            _this.error = error;
        });
    };
    BookAppointmentComponent = __decorate([
        Component({
            selector: "app-bookAppointment",
            templateUrl: "./bookAppointment.component.html",
            styleUrls: ["./bookAppointment.component.css"]
        }),
        __metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            Router,
            AppointmentServiceService])
    ], BookAppointmentComponent);
    return BookAppointmentComponent;
}());
export { BookAppointmentComponent };
//# sourceMappingURL=bookAppointment.component.js.map