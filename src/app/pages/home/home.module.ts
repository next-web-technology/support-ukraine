import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewHomeModule } from 'src/app/views/home/home.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ViewHomeModule],
})
export class HomeModule {}
