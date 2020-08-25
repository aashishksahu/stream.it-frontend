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

  ngOnInit(): void {
    this.api.getTopSongs().subscribe(res => {

      this.topSongs = res['resultSet'];
      console.log(this.topSongs)
    }, err => {
      console.log(err);
    })
  }

}
