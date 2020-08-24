import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamRoutingModule } from './stream-routing.module';
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    StreamRoutingModule
  ]
})
export class StreamModule { }
