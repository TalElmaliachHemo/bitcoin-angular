import { Subscription } from 'rxjs';
import { Contact } from './../../models/contact.model';
import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) { }

  contact!: Contact
  paramsSubscription!: Subscription

  ngOnInit(): void {
    this.paramsSubscription = this.route.data.subscribe(data => {
      const contact = data['contact']
      if (contact) this.contact = contact
    })
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
}

}
