import { UserService } from 'src/app/services/user.service';
import { Transaction } from './../../models/transaction.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() transactions!: Array<Transaction>

  ngOnInit(): void {
    this.transactions = this.userService.getUser().transactions
    console.log(this.transactions)
  }

}
