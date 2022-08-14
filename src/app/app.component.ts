import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('y') $years: ElementRef;
  @ViewChild('mo') $months: ElementRef;
  @ViewChild('d') $days: ElementRef;
  @ViewChild('h') $hours: ElementRef;
  @ViewChild('m') $minutes: ElementRef;
  @ViewChild('s') $seconds: ElementRef;

  public now = new Date();
  public targetDate = new Date(2072, 6, 8).getTime(); // 8 июля
  public years = 0;
  public months = 0;
  public days = 0;
  public hours = 0;
  public minutes = 0;
  public seconds = 0;

  constructor() {
  }

  ngAfterViewInit() {
    this._update();
    setInterval(() => {
      this._update()
    }, 1000);
  }

  private _update() {

    const current_date = new Date().getTime();
    let secondsLeft = (this.targetDate - current_date) / 1000;

    this.years = secondsLeft / 31536000;
    secondsLeft = secondsLeft % 31536000;

    this.months = secondsLeft / 2678400;
    secondsLeft = secondsLeft % 2678400;

    this.days = secondsLeft / 86400;
    secondsLeft = secondsLeft % 86400;

    this.hours = secondsLeft / 3600;
    secondsLeft = secondsLeft % 3600;

    this.minutes = secondsLeft / 60;
    this.seconds = secondsLeft % 60;

    this.$years.nativeElement.innerText = this._pad(this.years, 2);
    this.$months.nativeElement.innerText = this._pad(this.years, 2);
    this.$days.nativeElement.innerText = this._pad(this.days, 2);
    this.$hours.nativeElement.innerText = this._pad(this.hours, 2);
    this.$minutes.nativeElement.innerText = this._pad(this.minutes, 2);
    this.$seconds.nativeElement.innerText = this._pad(this.seconds, 2);
  }

  private _pad(num: number, size: number): string {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }


}
