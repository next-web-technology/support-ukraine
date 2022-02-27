import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHeroComponent } from './hero.component';

@NgModule({
  declarations: [ViewHeroComponent],
  imports: [CommonModule],
  exports: [ViewHeroComponent],
})
export class ViewHeroModule {}
