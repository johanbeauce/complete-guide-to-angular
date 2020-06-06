import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  statusHidden = false;
  clickLogs = [];
  index = 1;

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetailsClick() {
    this.clickLogs.push(this.index++ + '. clicked');
    this.statusHidden = !this.statusHidden;
  }

  getColor(log: string) {
    if (this.isLogGreaterThanFive(log)) {
      return 'blue';
    }
  }

  private getIndex(log: string) {
    return this.clickLogs.findIndex(value => value === log);
  }

  isLogGreaterThanFive(log: string) {
    return this.getIndex(log) >= 5;
  }
}
