import { NotificationsService } from "angular2-notifications";
import { DoctorServiceService } from "./../../_services/doctor-service.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Doctor } from "./../../_models/Doctor";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-viewDoctors",
  templateUrl: "./viewDoctors.component.html",
  styleUrls: ["./viewDoctors.component.css"]
})
export class ViewDoctorsComponent implements OnInit {
  message = "";
  error: boolean = false;
  userType: string;
  user: Doctor; //to store
  aList = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorServiceService,
    private notify: NotificationsService
  ) {}

  ngOnInit() {
    this.userType = localStorage.getItem("userType");
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.getData();
  }

  getData() {
    this.doctorService.getDoctors().subscribe(
      data => {
        this.aList = data;
        this.notify.success("Success", "Doctor list loaded.", {
          timeOut: 5000
        });
      },
      error => {
        error = true;
        this.notify.error("Error", "Error while loading doctors' details", {
          timeOut: 5000
        });
        console.log("View Doctor ERROR:", error);
      }
    );
  }
  deleteDoc(docId: number) {
    var x = confirm("Are you sure you want to delete?");
    if (x)
      this.doctorService.deleteDoctor(docId).subscribe(
        data => {
          // console.log("REceived data: ", data);
          this.notify.success("Success", "Doctor Deleted.", {
            timeOut: 5000
          });
          this.getData();
        },
        error => {
          error = true;
          this.notify.error("Error", "Error while deleting doctor.", {
            timeOut: 5000
          });
          console.log("Delete Doctor ERROR:", error);
        }
      );
  }
}
