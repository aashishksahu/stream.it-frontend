import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  username: string;
  password: string;

  ngOnInit(): void { }

  createLogin() {
    try {
      this.auth.authorize({ "username": this.username, "passkey": this.password }).subscribe((response) => {

        if (response["code"] == 401) {
          alert("Wrong credentials")
          this.auth.logout()

        } else {
          localStorage.setItem("token", response['token'])
          localStorage.setItem("username", response["username"])
          localStorage.setItem("usertype", response["usertype"])

          // route to home page if login successful
          if (localStorage.getItem('token')) {
            this.router.navigate(['/'])
          }
        }
      }, error => {
        console.log(error)
      })

    } catch (error) {
      console.log(error)
    }
  }

  destroyLogin() {
    this.auth.logout()
    this.router.navigate(['/auth/login'])
  }

}
