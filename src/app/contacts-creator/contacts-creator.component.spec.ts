/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ContactsCreatorComponent } from './contacts-creator.component';

describe('Component: ContactsCreator', () => {
  it('should create an instance', () => {
    let component = new ContactsCreatorComponent(null, null);
    expect(component).toBeTruthy();
  });
});
