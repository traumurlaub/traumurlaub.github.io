import {Component, OnInit} from '@angular/core';
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  subYears,
  subMonths,
  subDays,
  subHours,
  subMinutes
} from 'date-fns'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public now = new Date();
  public targetDate = new Date(2072, 7, 8); // 8 июля
  public years = `0`;
  public months = `0`;
  public days = `0`;
  public hours = `0`;
  public minutes = `0`;
  public seconds = `0`;

  constructor() {
  }

  ngOnInit() {
    this._update();
    setInterval(() => {
      this._update()
    }, 1000);
  }

  private _update() {
    this.years = differenceInYears(this.targetDate, new Date()).toString()
    let leftTime = subYears(this.targetDate, parseInt(this.years));
    this.months = differenceInMonths(leftTime, new Date()).toString();
    leftTime = subMonths(leftTime, parseInt(this.months));
    this.days = differenceInDays(leftTime, new Date()).toString();
    leftTime = subDays(leftTime, parseInt(this.days));
    this.hours = differenceInHours(leftTime, new Date()).toString();
    this.hours = this.hours.length < 2 ? `0${this.hours}` : this.hours;
    leftTime = subHours(leftTime, parseInt(this.hours));
    this.minutes = differenceInMinutes(leftTime, new Date()).toString();
    this.minutes = this.minutes.length < 2 ? `0${this.minutes}` : this.minutes;
    leftTime = subMinutes(leftTime, parseInt(this.minutes));
    this.seconds = differenceInSeconds(leftTime, new Date()).toString();
    this.seconds = this.seconds.length < 2 ? `0${this.seconds}` : this.seconds;

  }
}
