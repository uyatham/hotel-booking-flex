import { Injectable } from '@angular/core';

import { CheckIn } from '../models/checkin.model';
import { Guest } from '../models/guest.model';
import { Payment } from '../models/payment.model';

@Injectable()
export class BookingService {
  checkinInformation: CheckIn;
  guestsInfo: Guest[];
  paymentInfo: Payment;
  isCheckinFormValid: boolean;
  isGuestFormValid: boolean;
  constructor() {}

  saveCheckinInformation(checkinInfo: CheckIn): void {
    this.checkinInformation = checkinInfo;
  }

  getCheckinInformation(): CheckIn {
    return this.checkinInformation;
  }

  saveGuestsInfo(guestsInfo: Guest[]): void {
    this.guestsInfo = guestsInfo;
  }

  getGuestsInfo(): Guest[] {
    return this.guestsInfo;
  }

  clearBookingInfo(): void {
    this.checkinInformation = null;
    this.guestsInfo = null;
    this.isCheckinFormValid = false;
    this.isGuestFormValid = false;
  }
}
