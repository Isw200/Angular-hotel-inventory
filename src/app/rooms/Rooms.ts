export interface Rooms {
  totalRooms: number;
  availableRooms: number;
  reservedRooms: number;
}

export interface RoomList {
  roomNumber: number;
  roomType: string;
  amenties: string;
  price: number;
  photos: string;
  checkIn: Date;
  checkOut: Date;
}
