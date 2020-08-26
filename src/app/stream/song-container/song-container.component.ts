import { Component, OnInit, Input } from '@angular/core';
import { QueueService } from '../queue.service';

@Component({
  selector: 'app-song-container',
  templateUrl: './song-container.component.html',
  styleUrls: ['./song-container.component.css']
})
export class SongContainerComponent implements OnInit {

  constructor(private qService: QueueService) { }

  @Input() metaData: {} = {};

  audioid: number;
  albumArt: any;
  title: string;
  artist: string;
  label: string;

  queue = [];

  ngOnInit(): void {
    this.albumArt = "data:image/jpeg;base64," + this.metaData['albumart']
    this.title = this.metaData['title']
    this.artist = this.metaData['artist']
    this.label = this.metaData['label']
    this.audioid = this.metaData['id']

    this.updateQueue();

  }

  addToQueue() {
    this.qService.addToQueue({
      "audioid" : this.audioid,
      "title"   : this.title,
      "artist"  : this.artist,
      "label"  : this.label,
      "albumart": this.albumArt
    })

    this.updateQueue();

  }

  updateQueue() {
    this.queue = this.qService.getQueue();
  }

}
