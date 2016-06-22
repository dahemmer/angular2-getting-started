import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from '../model/contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  private API_ENDPOINT = 'http://localhost:4200/api';

  constructor(private http: Http) {
  }

  getContacts() {
    let url = `${this.API_ENDPOINT}/contacts`;
    return this.http.get(url).map(res => res.json());
  }

  getContact(id: number | string) {
    let url = `${this.API_ENDPOINT}/contacts/${id}`;
    return this.http.get(url).map(res => res.json());
  }

  updateContact(contact: Contact) {
    let url = `${this.API_ENDPOINT}/contacts/${contact.id}`;
    let data = JSON.stringify(contact);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    return this.http.put(url, data, { headers });
  }

  createContact(contact: Contact) {
    let url = `${this.API_ENDPOINT}/contacts`;
    let data = JSON.stringify(contact);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    return this.http.post(url, data, { headers });
  }
}
