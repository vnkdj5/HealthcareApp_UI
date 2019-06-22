import { Appointment } from 'src/app/_models/Appointment';
import { AppointmentServiceService } from "./../../_services/appointmentService.service";
import { UserService } from "./../../_services/user.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NotificationsService } from "angular2-notifications";
import { User } from "src/app/_models";

@Component({
  selector: "app-viewPatientHistory",
  templateUrl: "./viewPatientHistory.component.html",
  styleUrls: ["./viewPatientHistory.component.css"]
})
export class ViewPatientHistoryComponent implements OnInit {
  patientId: number;
  patientDetails: User;
  aList:Appointment[];

  getDetailsForm: FormGroup;
  loading = false;
  submitted = false;
  error = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private patientService: UserService,
    private notify: NotificationsService,
    private appointmentService: AppointmentServiceService
  ) {
    this.patientDetails=new User();
  }

  ngOnInit() {
    this.getDetailsForm = this.formBuilder.group({
      patientId: ["", Validators.required]
    });
    this.patientId = this.route.snapshot.queryParams["id"] || null;
    if(this.patientId){
        this.getData(this.patientId);
    }
  }

  getData(id:number){
    this.patientService.getPatientDetails(id).subscribe(
      data => {
        this.patientDetails = data;
      },
      error => {
        this.notify.error("Error", error, {
          timeOut: 5000
        });
      }
    );

    //Getting appointment history
    this.appointmentService
      .getPatientAppointments(id)
      .subscribe(data => {
        this.aList=data;
        this.loading = false;

      }, error => {
        console.log(error);
        this.notify.error("Error", error.message, {
          timeOut: 5000
        });
        this.loading = false;
      });
  }
 // convenience getter for easy access to form fields
 get f() {
  return this.getDetailsForm.controls;
}
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.getDetailsForm.invalid) {
      return;
    }

    this.loading = true;
    this.getData(this.f.patientId.value);
  }
}
