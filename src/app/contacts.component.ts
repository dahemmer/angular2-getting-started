import { Component, OnInit } from '@angular/core';
import { ContactsHeaderComponent } from './contacts-header';
import { Contact } from './model';
import { ContactsService } from './service';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'dh-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  directives: [ContactsHeaderComponent],
  providers: [ContactsService, HTTP_PROVIDERS]
})
export class ContactsComponent implements OnInit {
  contacts: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }
}
