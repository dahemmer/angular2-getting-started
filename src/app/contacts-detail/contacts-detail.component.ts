import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../model';
import { ContactsService } from '../service';

@Component({
  moduleId: module.id,
  selector: 'dh-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  private contact: Contact = <Contact>{ address: {} };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.contactsService
              .getContact(id)
              .subscribe(contact => { this.contact = contact; console.log(this.contact); });
      });
  }

  cancel() {
    this.navigateToContactsList();
  }

  save() {
    this.contactsService
        .updateContact(this.contact)
        .subscribe(() => this.navigateToContactsList());
  }

  private navigateToContactsList() {
    this.router.navigate(['']);
  }
}