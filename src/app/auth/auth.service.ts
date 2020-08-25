import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  private url: string = 'http://localhost:3030';

  public getURL(): string {
    return this.url;
  }

  public authorize(payload) {
    return this.http.post(`${this.url}/auth/login`, JSON.stringify(payload));
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  public getToken(): string {

    const authToken = localStorage.getItem('token');

    if (authToken) {
      return authToken;
    } else {
      this.router.navigate(['/auth/login']);

    }
  }

  public registerUser(payload) {
    return this.http.post(`${this.url}/auth/register`, JSON.stringify(payload))
  }

}
