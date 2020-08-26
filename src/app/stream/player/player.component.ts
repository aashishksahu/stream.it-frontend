import { Component, OnInit, IterableDiffers } from '@angular/core';
import { QueueService } from '../queue.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  queue = [];
  nowPlaying: [] = [];
  isNowPlayingEmpty;

  constructor(private differ: IterableDiffers, private qService: QueueService) { }

  ngOnInit(): void {
    this.updateQueue();
  }

  ngDoCheck() {
    let changes = this.differ.find(this.queue);
    if (changes) {

      this.nowPlaying = this.queue[0];
      // console.log(this.nowPlaying)
    }
  }

  emptyQueue() {
    this.qService.emptyQueue();
    this.updateQueue();
  }

  removeTrackFromQueue(id) {
    this.qService.removeFromQueue(id)
    this.updateQueue()
  }

  updateQueue() {
    this.queue = this.qService.getQueue();
  }

}
