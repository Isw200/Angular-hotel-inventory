import { Component } from '@angular/core';
import { RoomList, Rooms } from './Rooms';

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

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Single',
      amenties: 'TV, AC, WiFi',
      price: 100,
      photos: 'https://picsum.photos/200/300',
      checkIn: new Date(),
      checkOut: new Date(),
    },
    {
      roomNumber: 2,
      roomType: 'Double',
      amenties: 'TV, AC, WiFi',
      price: 200,
      photos: 'https://picsum.photos/200/300',
      checkIn: new Date(),
      checkOut: new Date(),
    },
    {
      roomNumber: 3,
      roomType: 'Suite',
      amenties: 'TV, AC, WiFi',
      price: 300,
      photos: 'https://picsum.photos/200/300',
      checkIn: new Date(),
      checkOut: new Date(),
    },
  ];

  hideRooms = false;

  role = 'admin';

  constructor() {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  addRoom() {
    const randomRoom: RoomList = {
      roomNumber: Math.floor(Math.random() * 100),
      roomType: 'Single',
      amenties: 'TV, AC, WiFi',
      price: 100,
      photos: 'https://picsum.photos/200/300',
      checkIn: new Date(),
      checkOut: new Date(),
    };
    this.roomList.push(randomRoom);
  }
  deleteAll() {
    this.roomList = [];
  }
  deleteRoom(roomNumber: number) {
    this.roomList = this.roomList.filter(
      (room) => room.roomNumber !== roomNumber
    );
  }

  chnageRole() {
    this.role === 'user' ? (this.role = 'admin') : (this.role = 'user');
  }
}
