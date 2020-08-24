import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'streamer-frontend';

  constructor(private router: Router, private auth: AuthService){
    const checkToken = this.auth.getToken();

  }

}
