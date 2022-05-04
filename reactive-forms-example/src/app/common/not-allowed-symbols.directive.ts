import { AbstractControl } from '@angular/forms';

export function correctNameVallidator(control: AbstractControl) {
  const regex = "^[0-9]*$";
  if (control.value !== null || !control.value.includes(regex)) {
    return true;
  }
  return null;
}