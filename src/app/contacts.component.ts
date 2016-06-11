import { Component } from '@angular/core';
import { ContactsHeaderComponent } from './contacts-header';

@Component({
  moduleId: module.id,
  selector: 'dh-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  directives: [ContactsHeaderComponent]
})
export class ContactsComponent {

}
