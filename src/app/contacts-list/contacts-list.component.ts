import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../model';
import { ContactsService } from '../service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'dh-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }
}
