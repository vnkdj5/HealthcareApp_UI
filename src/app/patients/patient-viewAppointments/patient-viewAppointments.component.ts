import { AppointmentServiceService } from "src/app/_services/appointmentService.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { User } from "src/app/_models";
import { concatAll } from "rxjs/operators";

@Component({
  selector: "app-patient-viewAppointments",
  templateUrl: "./patient-viewAppointments.component.html",
  styleUrls: ["./patient-viewAppointments.component.css"]
})
export class PatientViewAppointmentsComponent implements OnInit {
  message = "";
  error:boolean=false;
  userType: string;
  user:User; //to store
  aList=[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentSevice: AppointmentServiceService
  ) {}

  ngOnInit() {
    this.userType = localStorage.getItem("userType");
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    try{
      var patientId=this.user.id;
    }
    catch(error){

    }
    
    this.appointmentSevice.getPatientAppointments(patientId).subscribe(
      data =>{
          this.aList=data;
          console.log("REceived data: ", data);
      },
      error => {
        error=true;
        console.log("VView appointments: ", error);
      }
    );
  }
}
