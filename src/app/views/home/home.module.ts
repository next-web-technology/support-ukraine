import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHomeComponent } from './home.component';
import { ViewHeroModule } from './hero/hero.module';
import { ViewDonateWithUahModule } from './donate-with-uah/donate-with-uah.module';
import { ViewDonateWithOtherLegalCurrenciesModule } from './donate-with-other-legal-currencies/donate-with-other-legal-currencies.module';
import { ViewSaveLifeInUaModule } from './save-life-in-ua/save-life-in-ua.module';
import { ViewKunaModule } from './kuna/kuna.module';

@NgModule({
  declarations: [ViewHomeComponent],
  imports: [
    CommonModule,
    ViewHeroModule,
    ViewDonateWithUahModule,
    ViewDonateWithOtherLegalCurrenciesModule,
    ViewSaveLifeInUaModule,
    ViewKunaModule,
  ],
  exports: [ViewHomeComponent],
})
export class ViewHomeModule {}
