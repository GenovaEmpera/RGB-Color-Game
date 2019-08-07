import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  targetColorField: HTMLElement;
  resultField: HTMLElement;

  constructor(private dataService: DataService) { }


  private drawSquares(mode: number) {
    let parent = document.querySelector('.colors');
    for (let i = 0; i < mode; i++) {
      let el = document.createElement('div');
      el.className = 'square';
      parent.appendChild(el);
    }
  }
  private paintSquares(colorList: Array<string>): void {
    let length = document.querySelectorAll('.square').length;
    for (let i = 0; i < length; i++) {
      let el = <HTMLElement>document.getElementsByClassName('square')[i];
      el.style.backgroundColor = colorList[i] || colorList[0];
    }
  }
  private initFields(): void {
    this.targetColorField = document.querySelector('header');
    this.resultField = document.querySelector('.result');
  }
  private resetFields(): void {
    document.querySelector('.colors').innerHTML = '';
    this.targetColorField.innerHTML = `RGB: ${this.dataService.getTargetColor().slice(4, this.dataService.getTargetColor().length - 1)}`;
    this.targetColorField.style.backgroundColor = '#1e1e1e';
    this.resultField.innerHTML = 'guess color';
    this.resultField.classList.remove('error', 'success');
  }
  public displayResults(sample: string): void {
    this.paintSquares([sample]);
    this.targetColorField.style.backgroundColor = sample;
    this.resultField.classList.add('success');
    this.resultField.innerHTML = 'You Win';
  }
  public deleteSquare(el: HTMLElement): void {
    this.resultField.classList.add('error');
    this.resultField.innerHTML = 'Try Again';
    el.style.backgroundColor = '#1e1e1e';
    el.removeEventListener;
  }

  public initDisplay(mode: number) {
    this.initFields();
    this.resetFields();
    this.drawSquares(mode);
    this.paintSquares(this.dataService.getColorList());
  }
}
