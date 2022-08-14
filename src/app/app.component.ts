import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public now = new Date();
  public targetDate = new Date(2072, 7, 8); // 8 июля
  public targetTime: number;
  public years = 0;
  public months = 0;
  public days = 0;
  public hours = 0;
  public minutes = 0;
  public seconds = 0;

  constructor() {
  }

  ngOnInit() {
    this._update();
    setInterval(() => {
      this._update()
    }, 1000);
  }

  private _update() {
    const currentDate = new Date();
    const currentTime = currentDate.getTime();
    this.years = this._calculateYear(currentDate, this.targetDate);
    const newTargetDate = new Date(this.targetDate.getTime());
    newTargetDate.setFullYear(new Date().getFullYear()) // установили ту же дату, но на текущий год.
    if (newTargetDate < currentDate) {
      newTargetDate.setFullYear((new Date().getFullYear() + 1));
    }
    this.targetTime = newTargetDate.getTime();
    let secondsLeft = (this.targetTime - currentTime) / 1000;

    this.months = Math.floor(secondsLeft / 2592000);
    secondsLeft = secondsLeft % 2592000;

    this.days = Math.floor(secondsLeft / 86400);
    secondsLeft = secondsLeft % 86400;

    this.hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    this.minutes = Math.floor(secondsLeft / 60);
    this.seconds =  Math.floor(secondsLeft % 60);
  }

  private _calculateYear(currentDate: Date, targetDate: Date): number {
    const currentDateCopy = new Date(currentDate.getTime());
    const targetDateCopy = new Date(targetDate.getTime());
    targetDateCopy.setFullYear(new Date().getFullYear());
    return currentDateCopy > targetDateCopy ?
      targetDate.getFullYear() - currentDate.getFullYear() - 1 :
      targetDate.getFullYear() - currentDate.getFullYear();
  }

  // private _pad(num: number, size: number): number {
  //   let s = Math.round(num) + "";
  //   while (s.length < size) s = "0" + s;
  //   return parseInt(s);
  // }


}
