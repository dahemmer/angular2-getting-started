/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { EmailValidator } from './email-validator.directive';

describe('EmailValidator Directive', () => {
  it('should create an instance', () => {
    let directive = new EmailValidator();
    expect(directive).toBeTruthy();
  });
});
