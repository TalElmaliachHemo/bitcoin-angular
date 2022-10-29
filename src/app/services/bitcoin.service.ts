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
    const rateFromStorage = this.storageService.loadFromStorage('rate')
    if (rateFromStorage)
      return of(rateFromStorage)
    else {
      const apiStr = 'https://blockchain.info/ticker'
      const rate = this.http.get(apiStr).pipe(map(res => {
        const cleanRateMap = {
          usd: (res as { USD: { last: number } }).USD.last,
          eur: (res as { EUR: { last: number } }).EUR.last
        }
        this.storageService.saveToStorage('rate', cleanRateMap)
        return cleanRateMap
      }))
      return rate
    }
  }

  public getMarketPriceHistory() {
    const priceHistoryFromStorage = this.storageService.loadFromStorage('market-price-history')
    if (priceHistoryFromStorage)
      return of(priceHistoryFromStorage)
    else {
      const apiStr = 'https://api.blockchain.info/charts/market-price?timespan=3months&format=json&cors=true'
      const priceHistory = this.http.get(apiStr).pipe(map(res => {
        const cleanPriceHistoryMap = {
          name: (res as { name: string }).name,
          unit: (res as { unit: string }).unit,
          description: (res as { description: string }).description,
          values: (res as { values: Array<{ x: number, y: number }> }).values.map(value => {
            const date = (new Date(value.x * 1000)).toLocaleDateString("en-US");
            return {
              x: date,
              y: value.y
            }
          })
        }
        this.storageService.saveToStorage('market-price-history', cleanPriceHistoryMap)
        return cleanPriceHistoryMap
      }))
      return priceHistory
    }
  }

  public getAvgBlockSize() {
    const avgBlockSizeFromStorage = this.storageService.loadFromStorage('avg-block-size')
    if (avgBlockSizeFromStorage)
      return of(avgBlockSizeFromStorage)
    else {
      const apiStr = 'https://api.blockchain.info/charts/avg-block-size?timespan=3months&format=json&cors=true'
      const avgBlockSize = this.http.get(apiStr).pipe(map(res => {
        const cleanAvgBlockSize = {
          name: (res as { name: string }).name,
          unit: (res as { unit: string }).unit,
          description: (res as { description: string }).description,
          values: (res as { values: Array<{ x: number, y: number }> }).values.map(value => {
            const date = (new Date(value.x * 1000)).toLocaleDateString("en-US");
            return {
              x: date,
              y: value.y
            }
          })
        }
        this.storageService.saveToStorage('avg-block-size', cleanAvgBlockSize)
        return cleanAvgBlockSize
      }))
      return avgBlockSize
    }
  }
}
