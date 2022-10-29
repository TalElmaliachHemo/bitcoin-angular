import { lastValueFrom } from 'rxjs';
import { BitcoinService } from './../../services/bitcoin.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'statistic-app',
  templateUrl: './statistic-app.component.html',
  styleUrls: ['./statistic-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticAppComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  marketPriceHistory: object | null = null
  priceHistoryLabels: string[] = []
  priceHistoryData: Array<number> = []
  priceHistoryDescription: string = ''

  avgBlockSize: object | null = null
  avgBlockSizeLabels: string[] = []
  avgBlockSizeData: Array<number> = []
  avgBlockSizeDescription: string = ''

  async ngOnInit() {
    const historyPrice = await lastValueFrom(this.bitcoinService.getMarketPriceHistory())

    this.marketPriceHistory = historyPrice
    this.priceHistoryDescription = historyPrice.description
    this.priceHistoryLabels = (this.marketPriceHistory as { values: { x: string }[] }).values.map((value) => value.x);
    this.priceHistoryData = (this.marketPriceHistory as { values: Array<{ y: number }> }).values.map((value) => value.y);

    const avgBlockSize = await lastValueFrom(this.bitcoinService.getAvgBlockSize())
    this.avgBlockSize = avgBlockSize as object
    this.avgBlockSizeDescription = (avgBlockSize! as { description: string }).description
    this.avgBlockSizeLabels = (this.avgBlockSize as { values: { x: string }[] }).values.map((value) => value.x);
    this.avgBlockSizeData = (this.avgBlockSize as { values: Array<{ y: number }> }).values.map((value) => value.y);
  }
}
