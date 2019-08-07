import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  colorList: Array<string>;
  targetColor: string;

  constructor() {
    this.colorList = [];
  }

  public getTargetColor(): string {
    return this.targetColor;
  }

  public getColorList(): Array<string> {
    return this.colorList;
  }

  private setTargetColor(): void {
    let index = Math.floor(Math.random() * Math.floor(this.colorList.length));
    this.targetColor = this.colorList[index];
  }
  private createColorList(mode: number): void {
    this.colorList = [];
    for (let i = 0; i < mode; i++) {
      let r = Math.floor(Math.random() * Math.floor(255));
      let g = Math.floor(Math.random() * Math.floor(255));
      let b = Math.floor(Math.random() * Math.floor(255));
      this.colorList.push(`rgb(${r}, ${g}, ${b})`);
    }
  }

  public initColors(mode: number): void {
    this.createColorList(mode);
    this.setTargetColor();
  }

}
