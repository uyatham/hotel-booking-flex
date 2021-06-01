import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking.component';
import { CheckInComponent } from './check-in/check-in.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [
      { path: 'check-in', component: CheckInComponent },
      { path: 'personal-info', component: PersonalInfoComponent },
      { path: 'payment', component: PaymentComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
    BookingComponent,
    CheckInComponent,
    PaymentComponent,
    PersonalInfoComponent,
  ],
})
export class BookingRoutingModule {}
