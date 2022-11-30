import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MatFormFieldModule  } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', redirectTo: 'login', },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
