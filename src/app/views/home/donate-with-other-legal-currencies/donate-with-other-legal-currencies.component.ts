import { Component } from '@angular/core';
import {
  LEGAL_CURRENCIES,
  LEGAL_CURRENCY_LABELS,
} from 'src/app/models/leagl-currencies/leagal-currencies';
import { LegalCurrency } from 'src/app/models/leagl-currencies/leagal-currency.model';

@Component({
  selector: 'app-view-donate-with-other-legal-currencies',
  templateUrl: './donate-with-other-legal-currencies.component.html',
  styleUrls: ['./donate-with-other-legal-currencies.component.css'],
})
export class ViewDonateWithOtherLegalCurrenciesComponent {
  legalCurrencyLabels: string[] = LEGAL_CURRENCY_LABELS;
  legalCurrencies: LegalCurrency[] = LEGAL_CURRENCIES;

  constructor() {}
}
