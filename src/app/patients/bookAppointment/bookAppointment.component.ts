import { AppointmentServiceService } from './../../_services/appointmentService.service';
import { Appointment } from "./../../_models/Appointment";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: "app-bookAppointment",
  templateUrl: "./bookAppointment.component.html",
  styleUrls: ["./bookAppointment.component.css"]
})
export class BookAppointmentComponent implements OnInit {
  submitted = false;
  loading = false;
  bookForm: FormGroup;
  error = "";
  doctors = [
    { id: "1", name: "Skin Specialist[ABC]" },
    { id: "2", name: "DR 2" },
    { id: "3", name: "DR 3" },
    { id: "4", name: "DR 4" }
  ];


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private   appointmentSevice:AppointmentServiceService

  ) {}

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      patientId: ["007", [Validators.required]],
      subject: ["", [Validators.required]],
      visitDate: ["", [Validators.required]],
      timeslot: ["", [Validators.required]],
      description: ["", []],
      doctorId: ["", [Validators.required]]
    });
  }

  get f() {
    return this.bookForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.bookForm.invalid) return;

    this.loading=true;
    let newAppintment = new Appointment(this.bookForm.value);
    console.log("Appointment data:", newAppintment);

    this.appointmentSevice.bookAppointment(newAppintment).subscribe(
      data =>{
          alert("Appointment ID:"+data.id+"has been scheduled successfully");
          this.router.navigate(['bookAppointment']);
      },
      error => {
        this.loading=false;
        this.error=error;
      }
    );

  }
}
