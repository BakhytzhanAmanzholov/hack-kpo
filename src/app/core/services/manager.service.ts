import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(
    private http: HttpClient
  ) { }

  getRooms() {
    return this.http.get('/api/rooms/')
  }

  getRoom(id: number) {
    return this.http.get('/api/rooms/' + id);
  }

  getUsers() {
    return this.http.get('/api/users/')
  }

  /* Event */
  createEvent(body: any) {
    return this.http.post('/api/events', body);
  }
}
