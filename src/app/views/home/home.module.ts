import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHomeComponent } from './home.component';
import { ViewHeroModule } from './hero/hero.module';

@NgModule({
  declarations: [ViewHomeComponent],
  imports: [CommonModule, ViewHeroModule],
  exports: [ViewHomeComponent],
})
export class ViewHomeModule {}
