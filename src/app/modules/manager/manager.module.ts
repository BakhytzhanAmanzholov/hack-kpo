import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import { MatFormFieldModule  } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { PriorityComponent } from './pages/priority/priority.component';
import { Rooms } from './pages/rooms/rooms';
import { MetricsComponent } from './pages/metrics/metrics.component';
import { RoomComponent } from './pages/room/room.component';
import { BookRoomComponent } from './pages/book-room/book-room.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";

const routes: Routes = [
  {path: 'rooms', component: Rooms},
  {path: 'room/:id', component: RoomComponent},
  {path: 'room/:id/book', component: BookRoomComponent},
  {path: 'priority', component: PriorityComponent},
  {path: 'metrics', component: MetricsComponent},
  {path: '', redirectTo: 'rooms'},
];

@NgModule({
  declarations: [
    PriorityComponent,
    Rooms,
    MetricsComponent,
    RoomComponent,
    BookRoomComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
  ]
})
export class ManagerModule { }
