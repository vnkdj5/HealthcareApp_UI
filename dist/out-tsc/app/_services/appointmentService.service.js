var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Constants } from './../_models/constants';
import { Injectable } from '@angular/core';
var AppointmentServiceService = /** @class */ (function () {
    function AppointmentServiceService(http) {
        this.http = http;
        this.BASE_URL = Constants.baseURL;
    }
    //Service function for booking appointment
    AppointmentServiceService.prototype.bookAppointment = function (appointment) {
        return this.http.post(this.BASE_URL + "/appointment", appointment);
    };
    //Delete appintment with associated appoitment Id
    AppointmentServiceService.prototype.deleteAppointment = function (appointmentId, patientId) {
        return this.http.delete(this.BASE_URL + "/appointment/" + patientId + "/" + appointmentId);
    };
    //Get All appoitments irrespective of patient Id
    AppointmentServiceService.prototype.getAllAppoitments = function () {
        return this.http.get(this.BASE_URL + "/appointment/");
    };
    //get details about specific appointments
    AppointmentServiceService.prototype.getAppointmentDetails = function (id) {
        return this.http.get(this.BASE_URL + "/appointment/" + id);
    };
    AppointmentServiceService.prototype.getDoctorsAppointment = function (doctorId) {
        return this.http.get(this.BASE_URL + "/appointment/d?doctorId=" + doctorId);
    };
    //get appoints of specific patient
    AppointmentServiceService.prototype.getPatientAppointments = function (patientId) {
        return this.http.get(this.BASE_URL + "/appointment/p?patientId=" + patientId);
    };
    AppointmentServiceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AppointmentServiceService);
    return AppointmentServiceService;
}());
export { AppointmentServiceService };
//# sourceMappingURL=appointmentService.service.js.map