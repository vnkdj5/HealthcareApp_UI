var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ViewPatientHistoryComponent } from './doctor/viewPatientHistory/viewPatientHistory.component';
import { ViewDoctorsComponent } from './doctor/viewDoctors/viewDoctors.component';
import { PersonalInfoPatientComponent } from "./patients/personalInfoPatient/personalInfoPatient.component";
import { DoctorNamePipePipe } from "./_helpers/doctorName-pipe.pipe";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { BasicAuthInterceptor, ErrorInterceptor } from "./_helpers";
import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { NavbarComponent } from "./navbar/navbar.component";
import { BookAppointmentComponent } from "./patients";
import { PatientViewAppointmentsComponent } from "./patients";
import { DeleteAppointmentComponent } from "./patients/delete-appointment/delete-appointment.component";
import { SimpleNotificationsModule } from "angular2-notifications";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddDoctorComponent } from "./doctor/addDoctor/addDoctor.component";
import { DocPersonalInfoComponent } from './doctor/docPersonalInfo/docPersonalInfo.component';
import { DocViewAppointmentsComponent } from './doctor/docViewAppointments/docViewAppointments.component';
import { LoginDoctorComponent } from './loginDoctor/loginDoctor.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                ReactiveFormsModule,
                BrowserModule,
                BrowserAnimationsModule,
                HttpClientModule,
                FormsModule,
                routing,
                SimpleNotificationsModule.forRoot()
            ],
            declarations: [
                AppComponent,
                HomeComponent,
                LoginComponent,
                RegisterComponent,
                NavbarComponent,
                BookAppointmentComponent,
                PatientViewAppointmentsComponent,
                DeleteAppointmentComponent,
                DoctorNamePipePipe,
                PersonalInfoPatientComponent,
                AddDoctorComponent,
                ViewDoctorsComponent,
                DocViewAppointmentsComponent,
                DocPersonalInfoComponent,
                ViewPatientHistoryComponent,
                LoginDoctorComponent
            ],
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
            ],
            bootstrap: [
                AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map