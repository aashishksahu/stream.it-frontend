import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-container',
  templateUrl: './song-container.component.html',
  styleUrls: ['./song-container.component.css']
})
export class SongContainerComponent implements OnInit {
  
  constructor() { }
  
  @Input() metaData:{} = {};
  
  albumArt: any;
  title: string;
  artist: string;
  label: string;

  ngOnInit(): void {
    this.albumArt = "data:image/jpeg;base64,"+this.metaData['albumart']
    this.title = this.metaData['title']
    this.artist = this.metaData['artist']
    this.label = this.metaData['label']
  }

}
