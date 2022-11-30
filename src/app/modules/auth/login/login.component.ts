import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoggedin: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.authService.getOffice().subscribe(res => {
      console.log(res)
    })
  }

  login(): void {
    this.authService.login(this.loginForm.getRawValue())
      .subscribe((res: any) => {
        this.router.navigateByUrl('/rooms');
      }, (err: any) => {
        console.log(err);
      })
  }

}
