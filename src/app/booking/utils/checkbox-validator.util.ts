import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkBoxValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const isValid = value.some((x) => x);
    return isValid ? null : { ischeckBoxValid: false };
  };
}
