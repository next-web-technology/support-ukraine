import { Component } from '@angular/core';

@Component({
  selector: 'app-view-kuna',
  templateUrl: './kuna.component.html',
  styleUrls: ['./kuna.component.css'],
})
export class ViewKunaComponent {
  cryptoCurrencies: string[] = [
    'bch',
    'bnb',
    'btc',
    'dai',
    'dash',
    'doge',
    'eos',
    'eth',
    'ever',
    'kun',
    'link',
    'ltc',
    'shib',
    'trx',
    'tusd',
    'uax',
    'uni',
    'usdc',
    'usdt',
    'waves',
    'xem',
    'xlm',
    'xrp',
    'zec',
  ];

  constructor() {}
}
