import { CheckIn } from './checkin.model';
import { Guest } from './guest.model';
import { Payment } from './payment.model';

export interface Booking {
  checkIn: CheckIn;
  guest: Guest[];
  payment: Payment;
}
