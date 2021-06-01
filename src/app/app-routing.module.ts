import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'room',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
  },
  {
    path: 'my-bookings',
    loadChildren: () =>
      import('./my-bookings/my-bookings.module').then(
        (m) => m.MyBookingsModule
      ),
  },
  { path: '**', redirectTo: '/room/check-in' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
