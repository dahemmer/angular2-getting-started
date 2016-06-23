import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { ContactsService } from '../service';
import { validateEmail } from '../validator';

@Component({
  moduleId: module.id,
  selector: 'dh-contacts-creator',
  templateUrl: 'contacts-creator.component.html',
  styleUrls: ['contacts-creator.component.css'],
  directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class ContactsCreatorComponent implements OnInit {
  form: FormGroup;
  name: AbstractControl;
  email: AbstractControl;

  constructor(
    private contactsService: ContactsService,
    private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl(null, validateEmail),
      phone: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        number: new FormControl(),
        zip: new FormControl(),
        city: new FormControl(),
        country: new FormControl(),
      })
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
  }

  createContact() {
    this.contactsService.createContact(this.form.value).subscribe(() => this.router.navigate(['']));
  }
}
