import { Component } from '@angular/core';
import { ContactsHeaderComponent } from './contacts-header';
import { Contact } from './model/contact';

@Component({
  moduleId: module.id,
  selector: 'dh-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  directives: [ContactsHeaderComponent]
})
export class ContactsComponent {
  contact: Contact;
  contacts: Array<Contact>;

  constructor() {
    this.contact = new Contact();
    this.contact.name = 'John Doe';
    this.contact.email = 'john.doe@mail.com';

    this.contacts = new Array<Contact>();
    this.contacts.push(this.contact);
    this.contacts.push(<Contact>{
      name: 'Jane Doe',
      email: 'jane.doe@mail.com'
    });
    this.contacts.push(<Contact>{
      name: 'Mike Doe',
      email: 'mike.doe@mail.com'
    });
  }
}
