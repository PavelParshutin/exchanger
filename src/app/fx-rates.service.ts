import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class FxRatesService {

  constructor() { }

  /**
   * Generate a mock price feed by adding random numbers to a base rate
   * @returns {Observable}
   */

  public getFeed () {

    return Observable.create(observer => {

      setInterval(() => {

        let price = this.generatePrice();

        observer.next(price);

      }, 500);
    });
  }

  public generatePrice () {

    let base = 0.8;

    base += Math.random() / 10;

    return base;

  }
}
