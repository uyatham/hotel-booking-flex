import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { BookingService } from '../booking.service';
import { CheckIn } from '../../models/checkin.model';

import { checkBoxValidator } from '../utils/checkbox-validator.util';
@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  checkInForm: FormGroup;
  selectedFoodOptions: string[] = [];
  foodControls: AbstractControl[];

  checkInDateConfig = {
    min: moment().format('YYYY-MM-DD'),
  };
  checkOutDateConfig = {
    min: moment().format('YYYY-MM-DD'),
  };

  roomOptions = [
    { key: 'Standard (2x)', value: 'Standard' },
    { key: 'Deluxe (3X)', value: 'Deluxe' },
    { key: 'Suite (4X)', value: 'Suite' },
  ];
  persons = [1, 2, 3, 4];
  foodOptions = ['Breakfast', 'Lunch', 'Dinner'];
  pickUpOptions = [
    { key: 'Yes, Sure', value: 'Y' },
    { key: 'No, I already rented a car', value: 'N' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.checkInForm = this.formBuilder.group({
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
    this.updateCheckInForm();
    this.setTypesOfFood();
    this.foodControls = (
      this.checkInForm.get('typesOfFood') as FormArray
    ).controls;
  }

  updateCheckInForm(): void {
    const checkInFormValue = this.bookingService.getCheckinInformation();
    if (checkInFormValue) {
      this.selectedFoodOptions = checkInFormValue.typesOfFood;
      const { checkIn, checkOut, numberOfPersons, pickUp, roomType } =
        checkInFormValue;
      this.checkInForm.patchValue({
        checkIn,
        checkOut,
        numberOfPersons,
        pickUp: pickUp ? 'Y' : 'N',
        roomType,
      });
    }
  }

  setTypesOfFood(): void {
    const typesOfFoodFormArray = this.checkInForm.get(
      'typesOfFood'
    ) as FormArray;
    this.foodOptions.forEach((item) => {
      const index = this.findIndexOfFoodOptions(item);

      const formControl = new FormControl(index === -1 ? false : true);
      typesOfFoodFormArray.push(formControl);
    });
  }
  findIndexOfFoodOptions(item): number {
    return this.selectedFoodOptions.findIndex((food) => food === item);
  }

  onChange(value): void {
    const index = this.findIndexOfFoodOptions(value);
    if (index !== -1) {
      this.selectedFoodOptions.splice(index, 1);
    } else {
      this.selectedFoodOptions.push(value);
    }
  }

  checkInDateChange(): void {
    this.checkOutDateConfig.min = this.checkInForm.value.checkIn;
    this.checkInForm.patchValue({
      checkOut: '',
    });
  }

  saveCheckInInfo(): void {
    if (this.checkInForm.valid) {
      const { checkIn, checkOut, numberOfPersons, pickUp, roomType } =
        this.checkInForm.value;

      const checkInFormInfo: CheckIn = {
        checkIn,
        checkOut,
        numberOfPersons,
        pickUp: pickUp === 'Y',
        roomType,
        typesOfFood: this.selectedFoodOptions,
      };
      this.bookingService.saveCheckinInformation(checkInFormInfo);
      this.route.navigate(['/room/personal-info']);
    }
  }
}
