import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamRoutingModule } from './stream-routing.module';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { NavigateComponent } from './navigate/navigate.component';
import { HeaderComponent } from './header/header.component';
import { SongContainerComponent } from './song-container/song-container.component';


@NgModule({
  declarations: [PlayerComponent, HomeComponent, NavigateComponent, HeaderComponent, SongContainerComponent],
  imports: [
    CommonModule,
    StreamRoutingModule
  ]
})
export class StreamModule { }
