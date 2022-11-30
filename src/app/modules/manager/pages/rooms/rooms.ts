import { Component, OnInit } from '@angular/core';

import { ManagerService } from "../../../../core/services/manager.service";

@Component({
  selector: 'app-meetings',
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss']
})
export class Rooms implements OnInit {

  rooms = [];

  constructor(
    private managerService: ManagerService
  ) { }

  ngOnInit(): void {
    this.managerService.getRooms()
      .subscribe((res: any)=> {
        this.rooms = res;
        console.log(this.rooms);
      })
  }

}
