import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactAppComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contacts!: Contact[]
  subscription!: Subscription
  selectedContactId = ''

  ngOnInit(): void {
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
    this.contactService.loadContacts()
  }

  onRemoveContact(contactId: string) {
    this.contactService.remove(contactId)
  }
}
