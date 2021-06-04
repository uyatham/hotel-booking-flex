import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AddGuestComponent } from './add-guest/add-guest.component';
import { BookingComponent } from './booking.component';
import { CheckInComponent } from './check-in/check-in.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PaymentComponent } from './payment/payment.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [
      { path: 'check-in', component: CheckInComponent },
      { path: 'personal-info', component: PersonalInfoComponent },
      { path: 'payment', component: PaymentComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  declarations: [
    AddGuestComponent,
    BookingComponent,
    CheckInComponent,
    PaymentComponent,
    PersonalInfoComponent,
    PopupComponent,
  ],
  exports: [PopupComponent],
})
export class BookingRoutingModule {}
