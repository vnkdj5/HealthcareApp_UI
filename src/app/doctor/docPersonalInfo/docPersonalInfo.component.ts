import { Validators } from '@angular/forms';
import { DoctorServiceService } from './../../_services/doctor-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/_models/Doctor';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-docPersonalInfo',
  templateUrl: './docPersonalInfo.component.html',
  styleUrls: ['./docPersonalInfo.component.css']
})
export class DocPersonalInfoComponent implements OnInit {
  submitted = false;
  loading = false;
  DocForm: FormGroup;
  error = "";
  message = "";
  userType: string;
  savedUser: Doctor; //to store
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorServiceService,
    private notify: NotificationsService
  ) {}
  ngOnInit() {
    this.DocForm = this.formBuilder.group({
      id: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      emailId: ["", [Validators.required]],
      specialization: ["", [Validators.required]],
      degree: ["", [Validators.required]],
      mobileNo: ["", []]
    });
    try{
      this.savedUser.id=this.route.snapshot.queryParams["id"];
    }
   catch(eror){}
    this.savedUser = JSON.parse(localStorage.getItem("currentUser"));
    this.doctorService.getDoctorDetails(this.savedUser.id).subscribe(
      data => {
        if (data.hasOwnProperty("password")) delete data.password;
        this.DocForm.setValue(data);
      },
      error => {
        console.log("Profile Load Error: ", error);
        error = "Cannot load Profile Info. Please try later.";
      }
    );
  }
  get f() {
    return this.DocForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.DocForm.invalid) return;

    this.loading = true;

    let user = new Doctor(this.DocForm.value);

    //console.log("current user info:", user);

    this.doctorService.updateDoctorDetails(user).subscribe(
      data => {
        this.loading = false;
        this.message = "Doctor details are updated successfully.";
        this.notify.success(
          "Success",
          "Doctor details are updated successfully.",{
            timeOut:5000,
        position:["middle","center"],
        preventDuplicates:true
          }
        );
        this.error = "";
      },
      error => {
        this.loading = false;
        this.error = error;
        this.message = "";
        this.notify.error(
          "Error",
          "Doctor details update failed.",{
            timeOut:5000,
        position:["middle","center"],
        preventDuplicates:true
          }
        );
      }
    );
  }
 

}
