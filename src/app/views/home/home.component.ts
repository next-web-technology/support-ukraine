import { Component } from '@angular/core';
import {
  LEGAL_CURRENCIES,
  LEGAL_CURRENCY_LABELS,
} from 'src/app/models/leagl-currencies/leagal-currencies';
import { LegalCurrency } from 'src/app/models/leagl-currencies/leagal-currency.model';

@Component({
  selector: 'app-view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class ViewHomeComponent {
  legalCurrencyLabels: string[] = LEGAL_CURRENCY_LABELS;
  legalCurrencies: LegalCurrency[] = LEGAL_CURRENCIES;

  constructor() {}
}
