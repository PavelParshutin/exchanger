import { Component, OnInit } from '@angular/core';
import { FxRatesService } from '../fx-rates.service';

type Option = 'buy' | 'sell';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
  public buyAmount: number;
  public sellAmount: number;
  public activeOption: Option;
  public currentPrice: number;

  constructor(
    private fxRates: FxRatesService
  ) {}

  ngOnInit() {
    this.fxRates.getFeed().subscribe(
      response => {
        this.currentPrice = response;

        switch (this.activeOption) {
          case 'buy':
            this.sellAmount = parseFloat((this.buyAmount * this.currentPrice).toFixed(2));
            break;
          case 'sell':
            this.buyAmount = parseFloat((this.sellAmount / this.currentPrice).toFixed(2));
            break;
        }
      },
      error => {
        alert('Error fetching rate feed.');
        console.warn('Error fetching rate feed.', error);
      }
    );
  }

  public submit ( amount, rate, option: Option ) {
    const alertMessage = option === 'buy'
      ? 'You bought £' + amount + ' for €' + ( rate * amount ).toFixed(2)
      : 'You sold €' + amount + ' for £' + ( amount / rate ).toFixed(2);
    alert(alertMessage);
    this.buyAmount = 0;
    this.sellAmount = 0;
  }
}
