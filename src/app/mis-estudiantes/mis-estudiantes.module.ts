import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisEstudiantesPageRoutingModule } from './mis-estudiantes-routing.module';

import { MisEstudiantesPage } from './mis-estudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisEstudiantesPageRoutingModule
  ],
  declarations: [MisEstudiantesPage]
})
export class MisEstudiantesPageModule {}
