import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsComponent {
  message = 'Hello World!';
  numbers = [1, 2, 3, 4, 5];

  changeMessage(message: string) {
    this.message = message;
  }
}
