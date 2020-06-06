import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverEnable = true;
  serverCreation = 'Server is not created...';
  serverName = 'server name';
  infoOutput = '';
  serverCreated = false;
  servers = ['firstServer'];

  constructor() {
    setTimeout(() => {
      this.serverEnable = false;
    }, 2000);
  }

  ngOnInit() {

  }

  onServerCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = 'Server is created!';
  }

  onSeverNameChange(event: Event) {
    this.serverName = ((event.target) as HTMLInputElement).value;
  }

  onMouseOverServer($event: MouseEvent) {
    this.infoOutput = 'mouse over server';
  }

  onMouseOutServer($event: MouseEvent) {
    this.infoOutput = 'mouse leave server';
  }
}
