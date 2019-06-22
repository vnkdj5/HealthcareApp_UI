import { ViewPatientsComponent } from './patients/viewPatients/viewPatients.component';
import { LoginAdminComponent } from './loginAdmin/loginAdmin.component';
import { ViewPatientHistoryComponent } from './doctor/viewPatientHistory/viewPatientHistory.component';
import { AddDoctorComponent } from './doctor/addDoctor/addDoctor.component';
import { ViewDoctorsComponent } from './doctor/viewDoctors/viewDoctors.component';
import { PersonalInfoPatientComponent } from './patients/personalInfoPatient/personalInfoPatient.component';
import { PatientViewAppointmentsComponent } from './patients/patient-viewAppointments/patient-viewAppointments.component';
import { BookAppointmentComponent } from './patients/bookAppointment/bookAppointment.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import {RegisterComponent} from './register';
import { DeleteAppointmentComponent } from './patients/delete-appointment/delete-appointment.component';
import { DocPersonalInfoComponent } from './doctor/docPersonalInfo/docPersonalInfo.component';
import { DocViewAppointmentsComponent } from './doctor/docViewAppointments/docViewAppointments.component';
import { LoginDoctorComponent } from './loginDoctor/loginDoctor.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {path:'register', component:RegisterComponent},
  {path:'addAppointment', component:BookAppointmentComponent},
  {path:'deleteAppointment', component:DeleteAppointmentComponent},
  {path:'viewAppointments',component:PatientViewAppointmentsComponent},
  {path:'patient/viewInfo', component:PersonalInfoPatientComponent},
  {path:'admin/viewDoctors',component:ViewDoctorsComponent},
  {path:'admin/addDoctor',component:AddDoctorComponent},
  {path:'doctor/viewInfo', component:DocPersonalInfoComponent},
  {path:'doctor/viewAppointments',component:DocViewAppointmentsComponent },
  {path:'doctor/viewPatient', component:ViewPatientHistoryComponent},
  {path:'doctor/login', component:LoginDoctorComponent},
  {path:'admin/login', component:LoginAdminComponent},
  {path:'admin/viewPatients', component:ViewPatientsComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);