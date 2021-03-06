import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBookingsComponent } from './my-bookings.component';

const routes: Routes = [
  {
    path: '',
    component: MyBookingsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyBookingsComponent],
})
export class MyBookingsRoutingModule { }
