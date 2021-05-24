import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { IntroComponent } from './intro/intro.component';
import { TradeComponent } from './trade/trade.component';
import { FxRatesService } from "./fx-rates.service";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatListModule } from "@angular/material";

const appRoutes: Routes = [
  { path: '',      component: IntroComponent },
  { path: 'trade', component: TradeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TradeComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
  providers: [FxRatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
