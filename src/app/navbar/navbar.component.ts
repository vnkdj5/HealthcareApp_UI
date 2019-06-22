import { Component, OnInit } from "@angular/core";
import { User } from "../_models";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  userType: string;
  loggedIn:boolean=false;
  isloggedIn:boolean;
  user:any;
  constructor() {}

  ngOnInit() {
   this.userType=localStorage.getItem("userType");
   this.user=JSON.parse(localStorage.getItem("currentUser"));
   console.log(this.user);
  // alert("user type:"+this.userType);
  }
  getUserType(){
    this.userType=localStorage.getItem("userType");
    if(this.userType==null|| this.userType==undefined)
      return "";
      else
      return this.userType;
  }
}
