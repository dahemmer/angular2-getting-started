import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Contact} from '../model/contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  private API_ENDPOINT = 'http://localhost:4200/api';

  constructor(private http: Http) {
  }

  getContacts() {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
                    .map(res => res.json());
  }

  getContact(id: number | string) {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
                    .map(res => res.json().item);
  }

  updateContact(contact: Contact) {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    return this.http.put(`${this.API_ENDPOINT}/contacts/${contact.id}`,
                         JSON.stringify(contact),
                         { headers });
  }
}
