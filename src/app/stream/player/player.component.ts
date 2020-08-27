import { Component, OnInit, IterableDiffers } from '@angular/core';
import { QueueService } from '../queue.service';
import { StreamService } from '../stream.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  queue = [];
  nowPlaying: [] = [];
  isNowPlayingEmpty;
  audioStream;

  constructor(private differ: IterableDiffers, private qService: QueueService, private api: StreamService) { }

  ngOnInit(): void {
    this.updateQueue();
  }

  ngDoCheck() {
    let changes = this.differ.find(this.queue);

    if (changes) {
      if (this.nowPlaying == undefined || this.nowPlaying.length < 1) {
        this.nowPlaying = this.queue[0];

        this.startStream();

      } else if (this.queue.length < 1) {
        this.nowPlaying = undefined;
      }
    }
  }

  startStream() {

    if (this.nowPlaying != undefined) {
      this.api.getStream(this.nowPlaying['audioid']).subscribe(response => {

        if (response["code"] != 400) {
          this.audioStream = this.api.getStreamLink() + this.nowPlaying['audioid'];
        }
      })

    }
  }

  emptyQueue() {
    this.qService.emptyQueue();
    this.updateQueue();
  }

  removeTrackFromQueue(id) {
    this.qService.removeFromQueue(id)

    try {
      if (this.nowPlaying['audioid'] != this.queue[0]['audioid']) {
        this.nowPlaying = this.queue[0];
        this.startStream();
      }
    } catch (error) {
      // No need to do anything
    }


    this.updateQueue()
  }

  updateQueue() {
    this.queue = this.qService.getQueue();
  }

}
