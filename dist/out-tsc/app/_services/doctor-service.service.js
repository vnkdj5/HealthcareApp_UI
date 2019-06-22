var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Constants } from './../_models/constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DoctorServiceService = /** @class */ (function () {
    function DoctorServiceService(http) {
        this.http = http;
        this.BASE_URL = Constants.baseURL;
    }
    DoctorServiceService.prototype.getDoctorDetails = function (doctorId) {
        return this.http.get(this.BASE_URL + "/doctor/" + doctorId);
    };
    DoctorServiceService.prototype.addDoctor = function (doc) {
        return this.http.post(this.BASE_URL + "/doctor/", doc);
    };
    DoctorServiceService.prototype.deleteDoctor = function (doctorId) {
        return this.http.delete(this.BASE_URL + "/doctor/" + doctorId);
    };
    DoctorServiceService.prototype.updateDoctorDetails = function (doctor) {
        if (doctor.hasOwnProperty("password"))
            delete doctor.password;
        return this.http.put(this.BASE_URL + "/doctor/", doctor);
    };
    DoctorServiceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], DoctorServiceService);
    return DoctorServiceService;
}());
export { DoctorServiceService };
//# sourceMappingURL=doctor-service.service.js.map