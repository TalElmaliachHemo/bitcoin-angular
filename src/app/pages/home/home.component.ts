import { Transaction } from './../../models/transaction.model';
import { lastValueFrom } from 'rxjs';
import { BitcoinService } from './../../services/bitcoin.service';
import { UtilService } from './../../services/util.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService,
    private utilService: UtilService,
    private bitcoinService: BitcoinService) { }

  marketPriceHistory: object | null = null
  labels: string[] = []
  data: Array<number> = []
  description: string = ''
  user: User = {} as User
  greeting: string = ''
  rate!: object
  transactions!: Array<Transaction>

  async ngOnInit() {
    this.user = this.userService.getUser()
    this.greeting = `Hello ${this.user.name}, ${this.utilService.getGreeting()} !`

    this.rate = await lastValueFrom(this.bitcoinService.getRate())

    const transactions = this.userService.getUser().transactions
    if (transactions.length > 3) this.transactions = transactions.slice(0, 3);
    else this.transactions = transactions;

    const historyPrice = await lastValueFrom(this.bitcoinService.getMarketPriceHistory())

    this.marketPriceHistory = historyPrice
    this.description = historyPrice.description
    this.labels = (this.marketPriceHistory as { values: { x: string }[] }).values.map((value) => value.x);
    this.data = (this.marketPriceHistory as { values: Array<{ y: number }> }).values.map((value) => value.y);
  }

  get BTCtoUSD() {
    if (!this.rate) return
    return this.user.balance * (this.rate as { usd: number }).usd
  }

  get BTCtoEUR() {
    if (!this.rate) return
    return this.user.balance * (this.rate as { eur: number }).eur
  }
}
