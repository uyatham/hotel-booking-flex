import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import * as moment from 'moment';

import { checkBoxValidator } from '../utils/checkbox-validator.util';
@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  checkInForm = this.formBuilder.group({
    checkIn: ['', Validators.required],
    checkOut: ['', Validators.required],
    numberOfPersons: ['', Validators.required],
    pickUp: ['', Validators.required],
    roomType: ['', Validators.required],
    typesOfFood: this.formBuilder.array(
      [],
      [Validators.required, checkBoxValidator()]
    ),
  });

  checkInDateConfig = {
    min: moment().format('YYYY-MM-DD'),
  };
  checkOutDateConfig = {
    min: moment().format('YYYY-MM-DD'),
  };

  roomOptions = [
    { key: 'Standard (2x)', value: 2 },
    { key: 'Deluxe (3X)', value: 3 },
    { key: 'Suite (4X)', value: 4 },
  ];
  persons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  foodOptions = ['Breakfast', 'Lunch', 'Dinner'];
  pickUpOptions = [
    { key: 'Yes, Sure', value: 'Y' },
    { key: 'No, I already rented a car', value: 'N' },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
