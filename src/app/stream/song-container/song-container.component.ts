import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-container',
  templateUrl: './song-container.component.html',
  styleUrls: ['./song-container.component.css']
})
export class SongContainerComponent implements OnInit {

  constructor() { }

  @Input() metaData:{} = {};

  ngOnInit(): void {
  }

}
