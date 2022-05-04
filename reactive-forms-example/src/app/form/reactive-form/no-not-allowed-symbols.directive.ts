import { AbstractControl, ValidatorFn } from "@angular/forms";

export function NoNotAllowedSymbolsDirective(): ValidatorFn {
  const MYRegex: string = "^[0-9*#+]+$";
  return (control: AbstractControl): { [key: string]: any } | null =>  
  control.value?.toLowerCase() !== MYRegex
      ? null : {forbiddenSymbol: control.value};
}
