import { PatientCat } from './../_models/patientCat';
import { Constants } from './../_models/constants';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../_models";

@Injectable({ providedIn: "root" })
export class UserService {
  BASE_URL:string;
  constructor(private http: HttpClient) {
    this.BASE_URL=Constants.baseURL;
  }

  //Get List of all available patients 
  getAll() {
    return this.http.get<User[]>(`http://localhost:8080/health/patient/`);
  }

  //Get specific patient details
  getPatientDetails(patientId:number){
    return this.http.get<any>(this.BASE_URL+"/patient/"+patientId);
  }

  //Add patient details
  addPatient(patient:User){
    return this.http.post<any>(this.BASE_URL+'/patient/',patient);
  }

  //update patient details
  updatePatient(patient:User){
    if(patient.password==null)
      delete patient.password;
    return this.http.put<any>(this.BASE_URL+'/patient/',patient);
  }

  deletePatient(patientId:number){
    return this.http.delete<any>(this.BASE_URL+'/patient/'+patientId);
  }
}
