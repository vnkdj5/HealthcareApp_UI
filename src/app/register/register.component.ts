import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { AuthenticationService } from "../_services";
import { User } from "../_models";
@Component({
  selector: "register-user",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = "";
  user = {
    name: "",
    username: "",
    password: ""
  };
  error = "";
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      emailId: ["", [Validators.required]],
      password: ["123456", [Validators.required, Validators.minLength(6)]]
    });

    // reset login status incase someone is logged in on machine//not necessary
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/login";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService
      .register(
        this.f.firstName.value,
        this.f.lastName.value,
        this.f.emailId.value,
        this.f.password.value
      )
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          console.log(this.returnUrl);
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
