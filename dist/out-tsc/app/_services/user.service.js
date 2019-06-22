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
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.BASE_URL = Constants.baseURL;
    }
    //Get List of all available patients 
    UserService.prototype.getAll = function () {
        return this.http.get("http://localhost:8080/health/patient/");
    };
    //Get specific patient details
    UserService.prototype.getPatientDetails = function (patientId) {
        return this.http.get(this.BASE_URL + "/patient/" + patientId);
    };
    //Add patient details
    UserService.prototype.addPatient = function (patient) {
        return this.http.post(this.BASE_URL + '/patient/', patient);
    };
    //update patient details
    UserService.prototype.updatePatient = function (patient) {
        if (patient.password == null)
            delete patient.password;
        return this.http.put(this.BASE_URL + '/patient/', patient);
    };
    UserService.prototype.deletePatient = function (patientId) {
        return this.http.delete(this.BASE_URL + '/patient/' + patientId);
    };
    UserService = __decorate([
        Injectable({ providedIn: "root" }),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map