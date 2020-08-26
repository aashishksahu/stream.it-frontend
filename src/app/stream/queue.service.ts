import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  private queue = [];

  constructor() { }

  public getQueue() {
    return this.queue;
  }

  public addToQueue(track) {
    this.queue.push(track);
  }

  public removeFromQueue(trackId) {
    var deleteIndex;

    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i]['audioid'] == trackId) {
        deleteIndex = i;
        break;
      }
    }
    this.queue.splice(deleteIndex, 1);
  }

  public emptyQueue() {
    this.queue = [];
  }


}
