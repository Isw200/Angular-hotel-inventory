import { Component } from '@angular/core';
import { Rooms } from './Rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hilton';

  rooms: Rooms = {
    totalRooms: 5,
    availableRooms: 3,
    reservedRooms: 2,
  };

  hideRooms = false;

  constructor() {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  book() {
    this.rooms.availableRooms--;
    this.rooms.reservedRooms++;
  }
}
