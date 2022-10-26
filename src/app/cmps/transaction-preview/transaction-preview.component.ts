import { Transaction } from './../../models/transaction.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'transaction-preview',
  templateUrl: './transaction-preview.component.html',
  styleUrls: ['./transaction-preview.component.scss']
})
export class TransactionPreviewComponent implements OnInit {

  constructor() { }

  @Input() transaction!: Transaction

  ngOnInit(): void {
  }

}
