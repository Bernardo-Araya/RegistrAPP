import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cambio2Page } from './cambio2.page';

const routes: Routes = [
  {
    path: '',
    component: Cambio2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cambio2PageRoutingModule {}
