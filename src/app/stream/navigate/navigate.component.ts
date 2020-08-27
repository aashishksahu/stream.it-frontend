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
  searchResults: [] = [];
  searchTrue: boolean = false;

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

  search(evt) {
    this.api.getSearchResults(evt.target.value).subscribe(response => {
      this.searchResults = response['resultSet'];
      
      if(this.searchResults == undefined){
        this.searchTrue = false;
        return;
      }
      
      if (this.searchResults.length > 0) {
        this.searchTrue = true;
      } else {
        this.searchTrue = false;
      }

      console.log(this.searchResults.length)

    }, err => {
      console.log(err);

    })
  }

}
