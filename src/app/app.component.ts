import { Component, OnInit } from '@angular/core';
import { GameService } from './_services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private gameService: GameService) {
  }
  ngOnInit() {
    this.gameService.initGame();
  }
}
