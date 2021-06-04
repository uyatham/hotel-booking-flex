import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookingService } from '../booking.service';

import { Guest } from '../models/guest.model';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  guests: Guest[] = [];

  constructor(private router: Router, private bookingService: BookingService) {}

  ngOnInit(): void {
    const guests = this.bookingService.getGuestsInfo();
    if (guests && guests.length) {
      this.guests = guests;
    }
  }

  addGuest(guest: Guest): void {
    this.guests.push(guest);
  }
  goback(): void {
    this.router.navigate(['/room/check-in']);
  }
  saveGuest(): void {
    this.bookingService.saveGuestsInfo(this.guests);
    this.router.navigate(['/room/payment']);
  }
}
