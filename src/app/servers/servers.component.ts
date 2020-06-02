import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverEnable = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.serverEnable = false;
    }, 2000);
  }

}
