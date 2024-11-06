import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisEstudiantesPage } from './mis-estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: MisEstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisEstudiantesPageRoutingModule {}
