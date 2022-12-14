import { Transaction } from './../../models/transaction.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  constructor() { }

  @Input() transactions!: Array<Transaction>

  ngOnInit(): void {
  }

}
