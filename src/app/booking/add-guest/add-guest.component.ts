import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Guest } from '../models/guest.model';

import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss'],
})
export class AddGuestComponent {
  guestForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    age: ['', Validators.required],
  });

  @Input() popupComponentRef: PopupComponent;
  @Output() addGuest: EventEmitter<Guest> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  saveInfo(): void {
    if (this.guestForm.valid) {
      this.addGuest.emit(this.guestForm.value);
      this.guestForm.patchValue({
        firstName: '',
        lastName: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        age: '',
      });
      this.popupComponentRef.closeModal();
    }
  }
}
