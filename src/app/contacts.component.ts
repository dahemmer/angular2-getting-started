import { Component } from '@angular/core';

@Component({
  selector: 'dh-contacts',
  templateUrl: 'app/contacts.component.html',
  styleUrls: ['app/contacts.component.css']
})
export class ContactsComponent {
  message = 'Hello World!';
  numbers = [1, 2, 3, 4, 5];

  changeMessage(message: string) {
    this.message = message;
  }
}
