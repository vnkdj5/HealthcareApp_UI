import { PatientViewAppointmentsComponent } from './patients/patient-viewAppointments/patient-viewAppointments.component';
import { BookAppointmentComponent } from './patients/bookAppointment/bookAppointment.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import {RegisterComponent} from './register';
import { PatientCategoryComponent } from './views/patientcategory/patient-category.component';
import { DeleteAppointmentComponent } from './patients/delete-appointment/delete-appointment.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {path:'register', component:RegisterComponent},
  { path: 'patientCat',component:PatientCategoryComponent},
  {path:'addAppointment', component:BookAppointmentComponent},
  {path:'deleteAppointment', component:DeleteAppointmentComponent},

  {path:'viewAppointments',component:PatientViewAppointmentsComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);