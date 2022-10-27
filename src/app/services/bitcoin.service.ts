import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient,
    private storageService: StorageService) { }

  public getRate(): Observable<object> {
    if (this.storageService.loadFromStorage('rate'))
      return of(this.storageService.loadFromStorage('rate'))
    else {
      const apiStr = 'https://blockchain.info/ticker'
      const rateMap = this.http.get(apiStr).pipe(map(res => {
        console.log(res)
        const rate = {
          usd: (res as { USD: { last: number } }).USD.last,
          eur: (res as { EUR: { last: number } }).EUR.last
        }
        return rate
      }))
      this.storageService.saveToStorage('rate', rateMap)
      return rateMap
    }
  }

  public getMarketPriceHistory() {
    if (this.storageService.loadFromStorage('market-price-history'))
      return of(this.storageService.loadFromStorage('market-price-history'))
    else {
      const apiStr = 'https://api.blockchain.info/charts/market-price?timespan=3months&format=json&cors=true'
      const priceHistory = this.http.get(apiStr).pipe(map(res => {
        return res
      }))
      this.storageService.saveToStorage('market-price-history', priceHistory)
      return priceHistory
    }
  }

  public getAvgBlockSize() {
    if (this.storageService.loadFromStorage('avg-block-size'))
      return this.storageService.loadFromStorage('avg-block-size')
    else {
      const apiStr = 'https://api.blockchain.info/charts/avg-block-size?timespan=3months&format=json&cors=true'
      const avgBlockSize = this.http.get(apiStr).pipe(map(res => {
        return res
      }))
      this.storageService.saveToStorage('avg-block-size', avgBlockSize)
      return avgBlockSize
    }
  }
}
