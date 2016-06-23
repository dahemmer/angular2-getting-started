import { Directive, provide } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

export function validateEmail(c: FormControl) {
  let EMAIL_REGEXP = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))/.source +
    /@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.source
  );

  return (EMAIL_REGEXP.test(c.value) || c.value === null || c.value === '') ? null : {
    validateEmail: {
      valid: false
    }
  };
}

@Directive({
  selector: '[validateEmail]',
  providers: [
    provide(NG_VALIDATORS, {
      useValue: validateEmail,
      multi: true
    })
  ]
})
export class EmailValidatorDirective {
}
