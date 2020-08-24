import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  // private httpOptions = {
  //   headers: new HttpHeaders().append('Authorization', this.getToken())
  // }

  private url: string = 'http://localhost:3030';

  public authorize(payload) {
    return this.http.post(`${this.url}/auth/login`, JSON.stringify(payload));
  }

  public logout(){
    localStorage.clear()
  }

  public getToken(): string {

    const authToken = localStorage.getItem('token');

    if (authToken) {
      return localStorage.getItem('token');

    } else {
      this.router.navigate(['/auth/login']);

    }
  }

}
