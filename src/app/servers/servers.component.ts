import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverEnable = true;
  serverCreation = 'Server is not created...';

  constructor() {
    setTimeout(() => {
      this.serverEnable = false;
    }, 2000);
  }

  ngOnInit() {

  }

  onServerCreate() {
    this.serverCreation = 'Server is created!';
  }
}
