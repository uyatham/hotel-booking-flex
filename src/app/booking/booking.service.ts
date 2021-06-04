import { Injectable } from '@angular/core';

import { setLocalStorageKey } from './utils/storage.util';

import { CheckIn } from './models/checkin.model';
import { Guest } from './models/guest.model';

@Injectable()
export class BookingService {
  checkinInformation: CheckIn;
  guestsInfo: Guest[];
  paymentInfo = {};
  constructor() {}

  saveCheckinInformation(checkinInfo: CheckIn): void {
    this.checkinInformation = checkinInfo;
    setLocalStorageKey('check-in', JSON.stringify(checkinInfo));
  }

  getCheckinInformation(): CheckIn {
    return this.checkinInformation;
  }

  saveGuestsInfo(guestsInfo: Guest[]): void {
    this.guestsInfo = guestsInfo;
    setLocalStorageKey('guest', JSON.stringify(guestsInfo));
  }

  getGuestsInfo(): Guest[] {
    return this.guestsInfo;
  }

  savePaymentInfo(paymentInfo): void {
    this.paymentInfo = paymentInfo;
    setLocalStorageKey('payment', JSON.stringify(paymentInfo));
  }

  getPaymentInfo(): object {
    return this.paymentInfo;
  }
}
