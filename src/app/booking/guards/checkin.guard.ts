import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { BookingService } from '../booking.service';

@Injectable()
export class CheckInGuard implements CanActivate {
  constructor(private bookingService: BookingService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.bookingService.isCheckinFormValid;
  }
}
