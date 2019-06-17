import { Appointment } from './../_models/Appointment';
import { HttpClient } from '@angular/common/http';
import { Constants } from './../_models/constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {
BASE_URL:string;
constructor(private http:HttpClient) {
  this.BASE_URL=Constants.baseURL;
 }
  
 //Service function for booking appointment
 bookAppointment(appointment:Appointment){
   return this.http.post<any>(this.BASE_URL+"/appointment",appointment);

  }

  //Delete appintment with associated appoitment Id
  deleteAppointment(appointmentId:number,patientId:number){
    return this.http.delete<any>(this.BASE_URL+"/appointment/"+appointmentId);
  }
   

  //Get All appoitments irrespective of patient Id
  getAllAppoitments(){
      return this.http.get<any>(this.BASE_URL+"/appointment/")
  }

  //get details about specific appointments
  getAppointmentDetails(id:number){
    return this.http.get(this.BASE_URL+"/appointment/"+id);
  }

  //get appoints of specific patient
  getPatientAppointments(patientId:number){
    return this.http.get<any>(this.BASE_URL+"/appointment?patientId="+patientId);

  }
}
