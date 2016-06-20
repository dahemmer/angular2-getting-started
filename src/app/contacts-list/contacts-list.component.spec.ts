/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ContactsListComponent } from './contacts-list.component';
import { ContactsService } from '../service';

describe('Component: ContactsList', () => {
  it('should create an instance', () => {
    let component = new ContactsListComponent(null);
    expect(component).toBeTruthy();
  });
});
