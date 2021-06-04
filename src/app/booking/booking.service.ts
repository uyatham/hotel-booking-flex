import { Injectable } from '@angular/core';

import { setLocalStorageKey } from './utils/storage.util';

import { CheckIn } from './models/checkin.model';

@Injectable()
export class BookingService {
  checkinInformation: CheckIn;
  guestsInfo = [];
  paymentInfo = {};
  constructor() {}

  saveCheckinInformation(checkinInfo: CheckIn): void {
    this.checkinInformation = checkinInfo;
    setLocalStorageKey('check-in', JSON.stringify(checkinInfo));
  }

  getCheckinInformation(): CheckIn {
    return this.checkinInformation;
  }

  saveGuestsInfo(guestsInfo): void {
    this.guestsInfo = guestsInfo;
    setLocalStorageKey('guest', JSON.stringify(guestsInfo));
  }

  getGuestsInfo(): object {
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
