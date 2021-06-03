import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  paymentForm = this.formBuilder.group({});
  selectedPaymentMethod = 'C';
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
