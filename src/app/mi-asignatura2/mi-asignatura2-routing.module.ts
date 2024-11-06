import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiAsignatura2Page } from './mi-asignatura2.page';

const routes: Routes = [
  {
    path: '',
    component: MiAsignatura2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiAsignatura2PageRoutingModule {}
