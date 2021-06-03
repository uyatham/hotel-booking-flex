import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {
  constructor() { }

  bookings = [
    {
      hotelName: 'Hotel Vistara',
      location: 'Hyderabad',
      guests: 4,
      chekinTime: '28th May 2021 11 AM',
      chekoutTime: '29th May 2021 11 AM',
    },
    {
      hotelName: 'Hotel Novotel',
      location: 'Vizag',
      guests: 2,
      chekinTime: '30th May 2021 11 AM',
      chekoutTime: '31st May 2021 11 AM',
    },
  ];

  ngOnInit(): void {
  }

}
