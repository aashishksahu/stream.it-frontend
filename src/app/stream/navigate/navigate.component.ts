import { Component, OnInit } from '@angular/core';
import { StreamService } from '../stream.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor(private api: StreamService) { }

  topSongs: [] = [];
  favourites: [] = [];

  ngOnInit(): void {
    this.api.getTopSongs().subscribe(res => {

      this.topSongs = res['resultSet'];

    }, err => {
      console.log(err);
    })


    this.api.getFavourites(localStorage.getItem("userid")).subscribe(res => {

      this.favourites = res['results'];

    }, err => {
      console.log(err);
    })

  }

}
