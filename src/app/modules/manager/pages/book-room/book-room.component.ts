import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ManagerService} from "../../../../core/services/manager.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit {

  // tiles = Array.from(Array(32).keys());
  tiles = []
  timePoints = ["07:00",  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
  dates = ['30.11'];

  form: FormGroup;

  users: any;
  roomId: number;
  stepSize = new FormControl(2);

  activeTilesLeft: number;
  activeTilesRight: number;

  constructor(
    private route: ActivatedRoute,
    private managerService: ManagerService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.roomId = params['id'];
      this.managerService.getRoom(this.roomId)
        .subscribe((res: any) => {
          this.tiles = res.events;
          console.log(this.tiles);
        })
      this.managerService.getUsers()
        .subscribe((res: any) => {
          this.users = res;
        }, err => {
          this.users = [
            {
              "id": 1,
              "email": "user@gmail.com",
              "username": "Sanzhar",
              "role": "USER"
            },
            {
              "id": 2,
              "email": "user@gmail.com",
              "username": "Baha",
              "role": "USER"
            },
            {
              "id": 3,
              "email": "user@gmail.com",
              "username": "Daurenbek",
              "role": "USER"
            }
          ]
        })
    })
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      startId: ['', Validators.required],
      endId: ['', Validators.required],
      without: [false, Validators.required],
      guestIds: [[]]
    });
  }

  bookTile(tileId: number) {
    this.activeTilesLeft = tileId;
    this.activeTilesRight = tileId + this.stepSize.value - 1;
    this.form.controls['startId'].setValue(this.activeTilesLeft);
    this.form.controls['endId'].setValue(this.activeTilesRight);
  }

  submit() {
    console.log(this.form.getRawValue());
    this.managerService.createEvent(this.form.getRawValue())
      .subscribe(res => {
        console.log(res);
        // this.snackBarService.open('Created', 'Close');
      }, err => {
        console.log(err);
        // this.snackBarService.open('Failure!', 'Close');
      })
  }

}
