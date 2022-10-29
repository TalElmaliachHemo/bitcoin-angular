import { lastValueFrom } from 'rxjs';
import { BitcoinService } from './../../services/bitcoin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'statistic-app',
  templateUrl: './statistic-app.component.html',
  styleUrls: ['./statistic-app.component.scss']
})
export class StatisticAppComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  marketPriceHistory: object | null = null
  labels: string[] = []
  data: Array<number> = []
  description: string = ''

  async ngOnInit() {
    const historyPrice = await lastValueFrom(this.bitcoinService.getMarketPriceHistory())

    this.marketPriceHistory = historyPrice
    this.description = historyPrice.description
    this.labels = (this.marketPriceHistory as { values: { x: string }[] }).values.map((value) => value.x);
    this.data = (this.marketPriceHistory as { values: Array<{ y: number }> }).values.map((value) => value.y);
  }
}
