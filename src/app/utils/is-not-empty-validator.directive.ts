import { Directive, forwardRef, input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function isNotEmptyValidator(): ValidatorFn {
  return (control: AbstractControl<string>): ValidationErrors | null => {
    const valueLength = control.value.trim().length;
    return valueLength === 0 ? {isNotEmptyValue: {value: control.value}} : null; 
  }
}

@Directive({
  selector: '[appIsNotEmpty]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IsNotEmptyValidatorDirective),
      multi: true
    }
  ]
})
export class IsNotEmptyValidatorDirective implements Validator {
  readonly isNotEmptyValue = input<string>('', {alias: 'appIsNotEmpty'});

  validate(control: AbstractControl): ValidationErrors | null {
    return this.isNotEmptyValue() ? isNotEmptyValidator()(control) : null;
  }
}
