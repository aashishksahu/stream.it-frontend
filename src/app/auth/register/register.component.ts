import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  usertype: string;
  password: string;
  email: string;
  dob: Date;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser() {

    var email_regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (!email_regex.test(this.email)) {
      alert("Incorrect email format");
      return;
    }

    var userData = {
      "username": this.username,
      "usertype": this.usertype,
      "passkey": this.password,
      "email": this.email,
      "DOB": this.dob
    }

    this.auth.registerUser(userData).subscribe(
      response => {
        alert(response['message'])
        if (response['code'] == 200) {

          this.resetForm();

          this.router.navigate(["/auth/login"]);
        }
      },
      error => console.log(error)
    )

  }

  resetForm() {
    this.username = undefined;
    this.usertype = undefined;
    this.password = undefined;
    this.email = undefined;
    this.dob = undefined;
  }

}
