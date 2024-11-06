import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cambio2PageRoutingModule } from './cambio2-routing.module';

import { Cambio2Page } from './cambio2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cambio2PageRoutingModule
  ],
  declarations: [Cambio2Page]
})
export class Cambio2PageModule {}
