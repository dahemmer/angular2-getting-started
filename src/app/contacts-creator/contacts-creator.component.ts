import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Contact } from '../model';
import { ContactsService } from '../service';

@Component({
  moduleId: module.id,
  selector: 'dh-contacts-creator',
  templateUrl: 'contacts-creator.component.html',
  styleUrls: ['contacts-creator.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ContactsCreatorComponent {
  constructor(
    private contactsService: ContactsService,
    private router: Router) {
  }

  createContact(contact: Contact) {
    this.contactsService.createContact(contact).subscribe(() => this.router.navigate(['']));
  }
}
