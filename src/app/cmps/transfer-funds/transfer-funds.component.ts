import { Transaction } from './../../models/transaction.model';
import { UtilService } from './../../services/util.service';
import { UserService } from 'src/app/services/user.service';
import { Contact } from './../../models/contact.model';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent implements OnInit {

  constructor(private userService: UserService,
    private utilService: UtilService) { }

  @Input() contact!: Contact
  @Output() transferFunds = new EventEmitter<Transaction>()

  amount: number = 0

  ngOnInit(): void {
  }

  onTransferFunds() {
    this.userService.transferFunds(this.amount, this.contact)
    const transaction = {
      id: this.utilService.makeId(),
      toId: this.contact._id as string,
      to: this.contact.name,
      at: Date.now(),
      amount: this.amount
    }
    this.transferFunds.emit(transaction)
    this.amount = 0;
  }

}
