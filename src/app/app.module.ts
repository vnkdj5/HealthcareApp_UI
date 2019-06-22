import { LoginAdminComponent } from './loginAdmin/loginAdmin.component';
import { ViewPatientHistoryComponent } from './doctor/viewPatientHistory/viewPatientHistory.component';
import { ViewDoctorsComponent } from './doctor/viewDoctors/viewDoctors.component';
import { PersonalInfoPatientComponent } from "./patients/personalInfoPatient/personalInfoPatient.component";
import { DoctorNamePipePipe } from "./_helpers/doctorName-pipe.pipe";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
// used to create fake backend
import { fakeBackendProvider } from "./_helpers";
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
import { ViewPatientsComponent } from './patients/viewPatients/viewPatients.component';

@NgModule({
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
      LoginDoctorComponent,
      LoginAdminComponent,
      ViewPatientsComponent
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
