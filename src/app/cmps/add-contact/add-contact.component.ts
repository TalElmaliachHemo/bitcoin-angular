import { ContactService } from './../../services/contact.service';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {

  form!: FormGroup

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      phone: ['']
    })
  }

  onAddContact() {
    const newContact = this.form.value
    this.contactService.save(newContact)
    this.form.reset()
  }
}