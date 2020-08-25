import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders().append('Authorization', this.auth.getToken())
  }

  private url: string = this.auth.getURL();

  getTopSongs() {
    return this.http.get(`${this.url}/music/top`, this.httpOptions);
  }

}
