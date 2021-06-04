import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import {
  getLocalStorageValue,
  setLocalStorageKey,
} from '../utils/storage.util';

@Injectable()
export class HotelService {
  bookings: Booking[] = [];
  constructor() {}

  addBookings(booking: Booking): void {
    this.bookings.push(booking);
    setLocalStorageKey('bookings', JSON.stringify(this.bookings));
  }

  getBookings(): Booking[] {
    const bookings: Booking[] = getLocalStorageValue('bookings');
    return bookings ? bookings : [];
  }
}
