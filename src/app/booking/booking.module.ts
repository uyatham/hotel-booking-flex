import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';

import { BookingService } from './booking.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, BookingRoutingModule],
  providers: [BookingService],
})
export class BookingModule {}
