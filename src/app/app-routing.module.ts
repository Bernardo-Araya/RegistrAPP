import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menu2',
    loadChildren: () => import('./menu2/menu2.module').then( m => m.Menu2PageModule)  // Menú para docentes
  },
  {
    path: 'mis-asignaturas',
    loadChildren: () => import('./mis-asignaturas/mis-asignaturas.module').then( m => m.MisAsignaturasPageModule)
  },
  {
    path: 'mis-asistencias',
    loadChildren: () => import('./mis-asistencias/mis-asistencias.module').then( m => m.MisAsistenciasPageModule)
  },
  {
    path: 'registrar-asistencia',
    loadChildren: () => import('./registrar-asistencia/registrar-asistencia.module').then( m => m.RegistrarAsistenciaPageModule)
  },  {
    path: 'menu2',
    loadChildren: () => import('./menu2/menu2.module').then( m => m.Menu2PageModule)
  },
  {
    path: 'mi-asignatura2',
    loadChildren: () => import('./mi-asignatura2/mi-asignatura2.module').then( m => m.MiAsignatura2PageModule)
  },
  {
    path: 'mis-estudiantes',
    loadChildren: () => import('./mis-estudiantes/mis-estudiantes.module').then( m => m.MisEstudiantesPageModule)
  },
  {
    path: 'registrar-asistencia2',
    loadChildren: () => import('./registrar-asistencia2/registrar-asistencia2.module').then( m => m.RegistrarAsistencia2PageModule)
  },
  {
    path: 'cambio2',
    loadChildren: () => import('./cambio2/cambio2.module').then( m => m.Cambio2PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
