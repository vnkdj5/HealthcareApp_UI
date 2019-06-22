import { Doctor } from './../_models/Doctor';
import { Constants } from './../_models/constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  BASE_URL:string;
  constructor(private http:HttpClient) {
    this.BASE_URL=Constants.baseURL;
   }

   getDoctors(){
     return this.http.get<any>(this.BASE_URL+'/doctor/');
   }
   getDoctorDetails(doctorId:number){
     return this.http.get<any>(this.BASE_URL+"/doctor/"+doctorId);
   }

   addDoctor(doc:Doctor){
     return this.http.post<Doctor>(this.BASE_URL+"/doctor/",doc);
   }
   deleteDoctor(doctorId:number){
    return this.http.delete<any>(this.BASE_URL+"/doctor/"+doctorId);
   }
   updateDoctorDetails(doctor:Doctor){
    if (doctor.hasOwnProperty("password")) delete doctor.password;

    return this.http.put<any>(this.BASE_URL+"/doctor/", doctor);
   }
}
