import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public now = new Date();
  public targetDate = new Date(2072, 6, 8); // 8 июля
  public targetTime = this.targetDate.getTime();
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
    let secondsLeft = (this.targetTime - currentTime) / 1000;
    this.years = this._calculateYear(currentDate, this.targetDate);
    //
    // this.months = secondsLeft / 2678400;
    // secondsLeft = secondsLeft % 2678400;
    //
    // this.days = secondsLeft / 86400;
    // secondsLeft = secondsLeft % 86400;
    //
    // this.hours = secondsLeft / 3600;
    // secondsLeft = secondsLeft % 3600;
    //
    // this.minutes = secondsLeft / 60;
    // this.seconds = secondsLeft % 60;
    //
    // this.years = this._pad(this.years, 2);
    // this.months = this._pad(this.years, 2);
    // this.days = this._pad(this.days, 2);
    // this.hours = this._pad(this.hours, 2);
    // this.minutes = this._pad(this.minutes, 2);
    // this.seconds = this._pad(this.seconds, 2);
  }

  private _calculateYear(currentDate: Date, targetDate: Date): number {
    const targetDateCopy = new Date(targetDate.getTime());
    targetDateCopy.setFullYear(new Date().getFullYear());
    return currentDate > targetDateCopy ?
      this.targetDate.getFullYear() - currentDate.getFullYear() - 1 :
      this.targetDate.getFullYear() - currentDate.getFullYear();
  }

  private _pad(num: number, size: number): number {
    let s = Math.round(num) + "";
    while (s.length < size) s = "0" + s;
    return parseInt(s);
  }


}
