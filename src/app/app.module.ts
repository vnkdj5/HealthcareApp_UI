import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { DataTableModule } from "angular-6-datatable";
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { PatientCategoryComponent } from './views/patientcategory/patient-category.component';
import { RegisterComponent } from './register';
import { NavbarComponent } from './navbar/navbar.component'
import { BookAppointmentComponent } from './patients';
import { PatientViewAppointmentsComponent } from './patients';
@NgModule({
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule,
      DataTableModule,
      routing
   ],
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      PatientCategoryComponent,
      RegisterComponent,
      NavbarComponent,
      BookAppointmentComponent,
      PatientViewAppointmentsComponent
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
   ],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }