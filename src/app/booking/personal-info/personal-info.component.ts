import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
  guestForm = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {}
  saveInfo(): void {}
}
