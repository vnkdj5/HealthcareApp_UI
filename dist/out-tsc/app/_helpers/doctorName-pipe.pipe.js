var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DoctorServiceService } from "./../_services/doctor-service.service";
import { Pipe } from "@angular/core";
var DoctorNamePipePipe = /** @class */ (function () {
    function DoctorNamePipePipe(docService) {
        this.docService = docService;
    }
    DoctorNamePipePipe.prototype.transform = function (value, level) {
        this.docService.getDoctorDetails(value).subscribe(function (data) {
            if (level == 1)
                return "" + data.firstName + " " + data.lastName + "[" + value + "]";
            else
                return ("" +
                    data.firstName +
                    " " +
                    data.lastName +
                    "[" +
                    data.specializarion +
                    "]");
        }, function (error) {
            return "" + value;
        });
        return value + " -";
    };
    DoctorNamePipePipe = __decorate([
        Pipe({
            name: "doctorName"
        }),
        __metadata("design:paramtypes", [DoctorServiceService])
    ], DoctorNamePipePipe);
    return DoctorNamePipePipe;
}());
export { DoctorNamePipePipe };
//# sourceMappingURL=doctorName-pipe.pipe.js.map