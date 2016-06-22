import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { ContactsComponent, environment, ContactsRoutes } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ContactsComponent, [
  provideRouter(ContactsRoutes),
  disableDeprecatedForms(),
  provideForms()
]);
