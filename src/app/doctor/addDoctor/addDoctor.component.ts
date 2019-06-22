import { Doctor } from "./../../_models/Doctor";
import { NotificationsService } from "angular2-notifications";
import { Validators } from "@angular/forms";
import { DoctorServiceService } from "./../../_services/doctor-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { User } from "src/app/_models";

@Component({
  selector: "app-addDoctor",
  templateUrl: "./addDoctor.component.html",
  styleUrls: ["./addDoctor.component.css"]
})
export class AddDoctorComponent implements OnInit {
  addDocForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = "";
  message = "";
  userType: string;
  savedUser: Doctor;
  error = "";
  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorServiceService,
    private notify: NotificationsService
  ) {}

  ngOnInit() {
    this.addDocForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      emailId: ["", [Validators.required]],
      password: ["123456", [Validators.required, Validators.minLength(6)]],
      specialization: ["", [Validators.required]],
      degree: ["", [Validators.required]],
      mobileNo: ["", []]
    });
    this.savedUser = JSON.parse(localStorage.getItem("currentUser"));
    this.userType = localStorage.getItem("userType");
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.addDocForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.addDocForm.invalid) return;

    this.loading = true;

    let doc = new Doctor(this.addDocForm.value);

    console.log(" Doc info:", doc);

    this.doctorService.addDoctor(doc).subscribe(
      data => {
        this.loading = false;
        this.message = "Doctor(ID:"+data.id+") details are added successfully.";
        this.notify.success(
          "Success",
          "Doctor(ID:"+data.id+") details are added successfully.",
          {
            timeOut: 5000,
            position: ["middle", "center"],
            preventDuplicates: true
          }
        );
        this.error = "";
      },
      error => {
        this.loading = false;
        this.error = error;
        this.message = "";
        this.notify.error("Server Error", "Unable to add doctor", {
          timeOut: 5000,
          position: ["middle", "center"],
          preventDuplicates: true
        });
      }
    );
  }
}
