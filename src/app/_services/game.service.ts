import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DisplayService } from './display.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  mode: number;


  constructor(private dataService: DataService,
    private displayService: DisplayService) {
    this.mode = 2;
  }

  private setMode(m: number): void {
    document.querySelectorAll('.mode')[this.mode - 1].classList.remove('selected');
    this.mode = m;
    document.querySelectorAll('.mode')[m - 1].classList.add('selected');
    this.initGame();
  }


  private compareColors(sample: string, el: HTMLElement): void {
    if (sample === this.dataService.getTargetColor()) {
      this.displayService.displayResults(sample);
    } else {
      this.displayService.deleteSquare(el);
    }
  }

  private addSquareEvents(mode: number): void {
    for (let i = 0; i < mode; i++) {
      let el = <HTMLElement>document.querySelectorAll('.square')[i];
      el.addEventListener('click', () => {
        this.compareColors(el.style.backgroundColor, el);
      });
    }
  }
  private addMenuEvents() {
    document.querySelector('.new-game').addEventListener('click', () => {
      this.initGame();
    });
    let modes = document.querySelectorAll('.mode');
    for (let i = 0; i < 3; i++) {
      modes[i].addEventListener('click', () => {
        this.setMode(i + 1);
      });
      modes[this.mode - 1].classList.add('selected');
    }

  }

  public initGame(): void {
    this.dataService.initColors(this.mode * 3);
    this.displayService.initDisplay(this.mode * 3);
    this.addSquareEvents(this.mode * 3);
    this.addMenuEvents();
  }
}
