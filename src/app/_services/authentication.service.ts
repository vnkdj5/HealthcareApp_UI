import { Constants } from './../_models/constants';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  BASE_URL: string;
  constructor(private http: HttpClient) {
    this.BASE_URL=Constants.baseURL;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(this.BASE_URL + `/patient/login`, {
        id: username,
        password: password
      })
      .pipe(
        map(user => {
          // login successful if there's a user in the response
          if (user) {
            // store user details and basic auth credentials in local storage
            // to keep user logged in between page refreshes
            user.authdata = window.btoa(username + ":" + password);
            localStorage.setItem("currentUser", JSON.stringify(user.data));
            localStorage.setItem("userType","patient");
          }

          return user;
        })
      );
  }
  register(
    firstName: string,
    lastName: string,
    emailId: string,
    password: string
  ) {
    return this.http
      .post<any>(this.BASE_URL + "/patient/", {
        firstName: firstName,
        lastName: lastName,
        email: emailId,
        password: password
      })
      .pipe(
        map(user => {
          // login successful if there's a user in the response
          if (user) {
            // store user details and basic auth credentials in local storage
            // to keep user logged in between page refreshes
            user.authdata = window.btoa(user.id + ":" + password);
            localStorage.setItem("currentUser", JSON.stringify(user));
            console.log(JSON.stringify(user));
          }

          return user;
        })
      );
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userType");
  }

  loginDoctor(username: string, password: string) {
    return this.http
      .post<any>(this.BASE_URL + `/doctor/login`, {
        id: username,
        password: password
      })
      .pipe(
        map(user => {
          // login successful if there's a user in the response
          if (user) {
            // store user details and basic auth credentials in local storage
            // to keep user logged in between page refreshes
            user.authdata = window.btoa(username + ":" + password);
            localStorage.setItem("currentUser", JSON.stringify(user.data));
            localStorage.setItem("userType","doctor");
          }

          return user;
        })
      );
  }


  loginAdmin(username: string, password: string) {
    return this.http
      .post<any>(this.BASE_URL + `/admin/login`, {
        id: username,
        password: password
      })
      .pipe(
        map(user => {
          // login successful if there's a user in the response
          if (user) {
            // store user details and basic auth credentials in local storage
            // to keep user logged in between page refreshes
            user.authdata = window.btoa(username + ":" + password);
            localStorage.setItem("currentUser", JSON.stringify(user.data));
            localStorage.setItem("userType","admin");
          }

          return user;
        })
      );
  }
}
