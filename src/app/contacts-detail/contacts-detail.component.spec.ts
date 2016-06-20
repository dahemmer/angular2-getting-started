/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ContactsDetailComponent } from './contacts-detail.component';

describe('Component: ContactsDetail', () => {
  it('should create an instance', () => {
    let component = new ContactsDetailComponent(null, null, null);
    expect(component).toBeTruthy();
  });
});
