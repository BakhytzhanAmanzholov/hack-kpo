import { Component, OnInit } from '@angular/core';

import { AuthService } from "../core/services/auth.service";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout()
  }
}
