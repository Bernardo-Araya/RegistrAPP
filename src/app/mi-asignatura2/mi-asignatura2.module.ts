import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiAsignatura2PageRoutingModule } from './mi-asignatura2-routing.module';

import { MiAsignatura2Page } from './mi-asignatura2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiAsignatura2PageRoutingModule
  ],
  declarations: [MiAsignatura2Page]
})
export class MiAsignatura2PageModule {}
