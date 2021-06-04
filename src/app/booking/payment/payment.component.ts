import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';

import { HotelService } from 'src/app/services/hotel.service';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  cardPaymentForm = this.formBuilder.group({
    cardName: ['', Validators.required],
    cardNumber: ['', Validators.required],
    expDate: ['', Validators.required],
    cvv: ['', Validators.required],
  });
  upiPaymentForm = this.formBuilder.group({
    upiNumber: ['', Validators.required],
  });

  selectedPaymentMethod = 'C';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private hotelService: HotelService
  ) {}

  goback(): void {
    this.router.navigate(['/room/personal-info']);
  }

  onConfirmation(): void {
    const checkInInfo = this.bookingService.getCheckinInformation();
    const guestInfo = this.bookingService.getGuestsInfo();

    let formValue = this.cardPaymentForm.value;
    if (this.selectedPaymentMethod !== 'C') {
      formValue = this.upiPaymentForm.value;
    }

    const booking: Booking = {
      checkIn: checkInInfo,
      guest: guestInfo,
      payment: formValue,
    };
    this.hotelService.addBookings(booking);
    this.bookingService.clearBookingInfo();

    this.router.navigate(['/my-bookings']);
  }
}
