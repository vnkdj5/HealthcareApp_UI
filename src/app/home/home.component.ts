import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

@Component(
  { 
  templateUrl: 'home.component.html' 
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }
  userType:string;
  ngOnInit() {
    this.userType=localStorage.getItem("userType");
  }
}