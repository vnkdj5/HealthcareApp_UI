import { Appointment } from './../../_models/Appointment';
import { AppointmentServiceService } from './../../_services/appointmentService.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/_models/Doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docViewAppointments',
  templateUrl: './docViewAppointments.component.html',
  styleUrls: ['./docViewAppointments.component.css']
})
export class DocViewAppointmentsComponent implements OnInit {
  message = "";
  error:boolean=false;
  userType: string;
  user:Doctor; //to store
  aList:Appointment[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentSevice: AppointmentServiceService
  ) {}

  ngOnInit() {
    this.userType = localStorage.getItem("userType");
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    try{
      var doctorId=this.user.id;
    }
    catch(error){

    }
    
    this.appointmentSevice.getDoctorsAppointment(doctorId).subscribe(
      data =>{
          this.aList=data;
          console.log("REceived data: ", data);
      },
      error => {
        error=true;
        console.log("View appointments: ", error);
      }
    );
  }
 
}
