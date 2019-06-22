import { first } from 'rxjs/operators';
import { AuthenticationService } from './../_services/authentication.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-loginAdmin',
  templateUrl: './loginAdmin.component.html',
  styleUrls: ['./loginAdmin.component.css']
})
export class LoginAdminComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notify:NotificationsService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    //console.log(this.returnUrl);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .loginAdmin(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          //console.log("data received: ", data);
          this.router.navigate([this.returnUrl]);
          //console.log(";pcalstorage",localStorage.getItem("currentUser"));
          this.notify.success(
            "Success",
            "Login Successful.",{
              timeOut:5000,
          position:["middle","center"],
          preventDuplicates:true
            }
          );
        },
        error => {
          this.error = error;
          this.loading = false;
          this.notify.error(
            "Login Failed",
            "Incorrect userId or password.",{
              timeOut:5000,
          position:["middle","center"],
          preventDuplicates:true
            }
          );
        }
      );
  }

}
