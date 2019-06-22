import { UserService } from "./../../_services/user.service";
import { Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { User } from "src/app/_models";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { NotificationsService } from "angular2-notifications";

@Component({
  selector: "app-personalInfoPatient",
  templateUrl: "./personalInfoPatient.component.html",
  styleUrls: ["./personalInfoPatient.component.css"]
})
export class PersonalInfoPatientComponent implements OnInit {
  submitted = false;
  loading = false;
  patientInfoForm: FormGroup;
  error = "";
  message = "";
  userType: string;
  savedUser: User; //to store
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private patientService: UserService,
    private notify: NotificationsService
  ) {}
  ngOnInit() {
    this.patientInfoForm = this.formBuilder.group({
      id: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      dateOfBirth: ["", []],
      email: ["", [Validators.required]],
      address: ["", []]
    });
    try{
      this.savedUser.id=this.route.snapshot.queryParams["id"];
    }
   catch(eror){}
    this.savedUser = JSON.parse(localStorage.getItem("currentUser"));
    this.patientService.getPatientDetails(this.savedUser.id).subscribe(
      data => {
        if (data.hasOwnProperty("password")) delete data.password;
        this.patientInfoForm.setValue(data);
      },
      error => {
        console.log("Profile Load Error: ", error);
        error = "Cannot load Profile Info. Please try later.";
      }
    );
  }
  get f() {
    return this.patientInfoForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.patientInfoForm.invalid) return;

    this.loading = true;

    let user = new User(this.patientInfoForm.value);

    //console.log("current user info:", user);

    this.patientService.updatePatient(user).subscribe(
      data => {
        this.loading = false;
        this.message = "Patient details are updated successfully.";
        this.notify.success(
          "Success",
          "Patient details are updated successfully.",{
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
          "Patient details update failed.",{
            timeOut:5000,
        position:["middle","center"],
        preventDuplicates:true
          }
        );
      }
    );
  }
 
}
