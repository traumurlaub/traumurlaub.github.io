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
  subMinutes,
} from 'date-fns'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public now = new Date();
  public targetDate = new Date(2072, 7, 15); // 8 июля
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
    this.years = differenceInYears(this.targetDate, new Date())
    let leftTime = subYears(this.targetDate, this.years);
    this.months = differenceInMonths(leftTime, new Date());
    leftTime = subMonths(leftTime, this.months);
    this.days = differenceInDays(leftTime, new Date());
    leftTime = subDays(leftTime, this.days);
    this.hours = differenceInHours(leftTime, new Date());
    leftTime = subHours(leftTime, this.hours);
    this.minutes = differenceInMinutes(leftTime, new Date());
    leftTime = subMinutes(leftTime, this.minutes);
    this.seconds = differenceInSeconds(leftTime, new Date());
  }
}
