import { Component } from '@angular/core';
import { ContactsHeaderComponent } from './contacts-header';
import { ContactsService } from './service';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'dh-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  directives: [ContactsHeaderComponent, ROUTER_DIRECTIVES],
  providers: [ContactsService, HTTP_PROVIDERS]
})
export class ContactsComponent {

}
