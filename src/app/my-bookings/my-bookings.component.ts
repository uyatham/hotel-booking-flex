import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/booking.model';

import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
})
export class MyBookingsComponent implements OnInit {
  constructor(private hotelService: HotelService) {}

  bookings: Booking[];

  ngOnInit(): void {
    this.bookings = this.hotelService.getBookings();
  }
}
