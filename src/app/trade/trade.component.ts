import { Component, OnInit } from '@angular/core';
import { FxRatesService } from "../fx-rates.service";
import {Subject} from 'rxjs/Subject';
import {takeLast, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
  public buyAmount: number;
  public sellAmount: number;
  activeAmount: string
  public currentPrice: number;
  unsubscribe$: Subject<any>

  constructor(
    private fxRates: FxRatesService
  ) {}

  ngOnInit() {
    this.unsubscribe$ = new Subject<any>()
    this.fxRates.getFeed().pipe(takeUntil(this.unsubscribe$)).subscribe(
      response => {
        console.log(response)
        this.currentPrice = response;
      },
      error => {
        alert('Error fetching rate feed.');
        console.warn('Error fetching rate feed.', error);
      }
    );

  }
  onFocus() {
      this.unsubscribe$.next()
      this.unsubscribe$.complete()
    this.fxRates.getFeed().subscribe(response => this.currentPrice = response)
  }
  onChange(option) {
    this.activeAmount = option
    if(this.activeAmount === 'buy amount') {
      this.sellAmount = this.buyAmount * this.currentPrice;
    } else {
      this.buyAmount = this.sellAmount * this.currentPrice;
    }
  }

  public submit ( amount, rate ) {
    alert('You bought £' + amount + ' for €' + ( rate * amount ).toFixed(2));
  }

}
