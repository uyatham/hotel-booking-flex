import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AddGuestComponent } from './add-guest/add-guest.component';
import { BookingComponent } from './booking.component';
import { CheckInComponent } from './check-in/check-in.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PaymentComponent } from './payment/payment.component';
import { PopupComponent } from './popup/popup.component';

import { BookingService } from './booking.service';
import { CheckInGuard } from './guards/checkin.guard';
import { PersonalInfoGuard } from './guards/personal-info.guard';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [
      { path: '', redirectTo: 'check-in' },
      { path: 'check-in', component: CheckInComponent },
      {
        path: 'personal-info',
        component: PersonalInfoComponent,
        canActivate: [CheckInGuard],
      },
      {
        path: 'payment',
        component: PaymentComponent,
        canActivate: [PersonalInfoGuard],
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: [BookingService, CheckInGuard, PersonalInfoGuard],
  declarations: [
    AddGuestComponent,
    BookingComponent,
    CheckInComponent,
    ConfirmationComponent,
    PaymentComponent,
    PersonalInfoComponent,
    PopupComponent,
  ],
  exports: [PopupComponent],
})
export class BookingRoutingModule {}
