var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ActivatedRoute, Router } from "@angular/router";
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AppointmentServiceService } from "src/app/_services/appointmentService.service";
import { Appointment } from "src/app/_models/Appointment";
var DeleteAppointmentComponent = /** @class */ (function () {
    function DeleteAppointmentComponent(formBuilder, route, router, appointmentSevice) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.appointmentSevice = appointmentSevice;
        this.submitted = false;
        this.loading = false;
        this.error = "";
        this.success = false;
        this.message = "";
    }
    DeleteAppointmentComponent.prototype.ngOnInit = function () {
        this.deleteAppForm = this.formBuilder.group({
            patientId: ["007", [Validators.required]],
            appointmentId: ["", [Validators.required]]
        });
        this.userType = localStorage.getItem("userType");
        this.user = JSON.parse(localStorage.getItem("currentUser"));
    };
    Object.defineProperty(DeleteAppointmentComponent.prototype, "f", {
        get: function () {
            return this.deleteAppForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    DeleteAppointmentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.deleteAppForm.invalid)
            return;
        this.loading = true;
        var newAppintment = new Appointment(this.deleteAppForm.value);
        console.log("Appointment data:", newAppintment);
        console.log("current user info", this.user);
        this.appointmentSevice
            .deleteAppointment(newAppintment.appointmentId, this.user.id)
            .subscribe(function (data) {
            _this.success = true;
            _this.message =
                "Appointment ID:" + data.id + "has been deleted successfully";
            _this.loading = false;
            alert("Appointment ID:" + data.id + "has been deleted successfully");
            _this.router.navigate(["viewAppointment"]);
        }, function (error) {
            _this.loading = false;
            _this.error = error;
        });
    };
    DeleteAppointmentComponent = __decorate([
        Component({
            selector: "app-delete-appointment",
            templateUrl: "./delete-appointment.component.html",
            styleUrls: ["./delete-appointment.component.css"]
        }),
        __metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            Router,
            AppointmentServiceService])
    ], DeleteAppointmentComponent);
    return DeleteAppointmentComponent;
}());
export { DeleteAppointmentComponent };
//# sourceMappingURL=delete-appointment.component.js.map