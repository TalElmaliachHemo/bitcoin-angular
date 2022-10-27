import { Contact } from 'src/app/models/contact.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {

  constructor() { }

  @Input() contact!: Contact
  @Output() remove = new EventEmitter<string>()

  onRemoveContact() {
    this.remove.emit(this.contact._id)
  }
}
