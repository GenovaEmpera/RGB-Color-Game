import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameService } from './_services/game.service';
import { DisplayService } from './_services/display.service';
import { DataService } from './_services/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService, DataService, DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
