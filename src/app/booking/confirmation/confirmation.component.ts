import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  confirmForm = this.formBuilder.group({
    termsAndConditions: [false, Validators.required],
  });

  @Input() popupComponentRef: PopupComponent;
  @Output() confirmation: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  accept(): void {
    if (this.confirmForm.value.termsAndConditions) {
      this.confirmation.emit(true);
      this.popupComponentRef.closeModal();
    }
  }
  cancel(): void {
    this.popupComponentRef.closeModal();
  }
}
