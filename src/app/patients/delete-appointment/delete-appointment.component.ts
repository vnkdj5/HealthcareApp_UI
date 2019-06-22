import { User } from "./../../_models/user";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppointmentServiceService } from "src/app/_services/appointmentService.service";
import { Appointment } from "src/app/_models/Appointment";

@Component({
  selector: "app-delete-appointment",
  templateUrl: "./delete-appointment.component.html",
  styleUrls: ["./delete-appointment.component.css"]
})
export class DeleteAppointmentComponent implements OnInit {
  submitted = false;
  loading = false;
  deleteAppForm: FormGroup;
  error = "";
  success: boolean = false;
  message = "";
  userType: string;
  user: User;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appointmentSevice: AppointmentServiceService
  ) {}

  ngOnInit() {
    this.deleteAppForm = this.formBuilder.group({
      patientId: ["", [Validators.required]],
      appointmentId: ["", [Validators.required]]
    });
    this.userType = localStorage.getItem("userType");
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.deleteAppForm.setValue({patientId:this.user.id,
    appointmentId:""});
  }

  get f() {
    return this.deleteAppForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.deleteAppForm.invalid) return;

    this.loading = true;
    let newAppintment = new Appointment(this.deleteAppForm.value);
    console.log("Appointment data:", newAppintment);
    console.log("current user info", this.user);
    this.appointmentSevice
      .deleteAppointment(newAppintment.appointmentId, this.user.id)
      .subscribe(
        data => {
          this.success = true;
          this.message =
            "Appointment ID:" + data.id + "has been deleted successfully";
          this.loading = false;
          alert("Appointment ID:" + data.id + "has been deleted successfully");
          this.router.navigate(["viewAppointment"]);
        },
        error => {
          this.loading = false;
          this.error = error;
        }
      );
  }
}
