import { UserService } from './../../_services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../_models/user';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-viewPatients',
  templateUrl: './viewPatients.component.html',
  styleUrls: ['./viewPatients.component.css']
})
export class ViewPatientsComponent implements OnInit {
  message = "";
  error:boolean=false;
  userType: string;
  user:User; //to store
  aList=[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: UserService,
    private notify:NotificationsService
  ) {}

  ngOnInit() {
    this.userType = localStorage.getItem("userType");
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.getData();
    
    
    
  }

  getData(){
    this.patientService.getAll().subscribe(
      data =>{
        this.aList=data;
        this.notify.success(
          "Success",
          "Patient list loaded.",{
            timeOut:5000
          }
        );
      },
      error => {
        error=true;
        this.notify.error(
          "Error",
          "Error while loading patients' details",{
            timeOut:5000
          }
        );
        console.log("View Patient ERROR:", error);
      }
    );
  }
  deletePatient(patId:number){
    var x = confirm("Are you sure you want to delete?");
    if (x)
    this.patientService.deletePatient(patId).subscribe(
      data =>{
          
         // console.log("REceived data: ", data);
         this.notify.success(
           "Success",
           "Patient Deleted.",{
            timeOut:5000
          }
         );
         this.getData();  
      },
      error => {
        error=true;
        this.notify.error(
          "Error",
          "Error while deleting Patient.",{
            timeOut:5000
          }
        );
        console.log("Delete Patient ERROR:", error);
      }
    );
  }

}
