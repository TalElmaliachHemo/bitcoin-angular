import { Contact } from 'src/app/models/contact.model';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent {

  constructor() { }

  @Input() contacts!: Contact[]
  @Output() remove = new EventEmitter<string>()

}
