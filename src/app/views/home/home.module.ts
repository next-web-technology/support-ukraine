import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHomeComponent } from './home.component';
import { ViewHeroModule } from './hero/hero.module';
import { ViewDonateWithUahModule } from './donate-with-uah/donate-with-uah.module';
import { ViewDonateWithOtherLegalCurrenciesModule } from './donate-with-other-legal-currencies/donate-with-other-legal-currencies.module';

@NgModule({
  declarations: [ViewHomeComponent],
  imports: [
    CommonModule,
    ViewHeroModule,
    ViewDonateWithUahModule,
    ViewDonateWithOtherLegalCurrenciesModule,
  ],
  exports: [ViewHomeComponent],
})
export class ViewHomeModule {}
