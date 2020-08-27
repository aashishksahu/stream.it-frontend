import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  private url: string = this.auth.getURL();
  private streamLink = `${this.url}/music/stream?audioid=`;

  private httpOptions = {
    headers: new HttpHeaders().append('Authorization', this.auth.getToken())
  }

  getStreamLink() {
    return this.streamLink;
  }

  getTopSongs() {
    return this.http.get(`${this.url}/music/top`, this.httpOptions);
  }

  getFavourites(userid) {
    return this.http.get(`${this.url}/music/getFavourites?userid=${userid}`, this.httpOptions);
  }

  getStream(id) {
    var customOptions = this.httpOptions;
    customOptions['responseType'] = 'blob';

    return this.http.get(`${this.url}/music/stream?audioid=${id}`, customOptions)
  }

}
