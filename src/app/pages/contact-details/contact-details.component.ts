import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Transaction } from './../../models/transaction.model';
import { Subscription } from 'rxjs';
import { Contact } from './../../models/contact.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
    private userService: UserService) { }

  contact!: Contact
  paramsSubscription!: Subscription
  transactions!: Array<Transaction>

  ngOnInit(): void {
    this.paramsSubscription = this.route.data.subscribe(data => {
      const contact = data['contact']
      if (contact) this.contact = contact
    })

    this.transactions = this.userService.getUser().transactions.filter((transaction: Transaction) =>
      transaction.toId === this.contact._id)
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  }

}
