import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  userType: string;
  loggedIn:boolean=false;
  isloggedIn:boolean;
  user:object;
  constructor() {}

  ngOnInit() {
   this.userType=localStorage.getItem("userType");
   this.user=JSON.parse(localStorage.getItem("currentuser"));
  // alert("user type:"+this.userType);
  }
}
