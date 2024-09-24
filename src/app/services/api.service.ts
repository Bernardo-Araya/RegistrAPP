import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private asignaturas = [
    { id: 1, nombre: 'Matemáticas', seccion: 'A' },
    { id: 2, nombre: 'Historia', seccion: 'B' },
    { id: 3, nombre: 'Biología', seccion: 'C' },
  ];

  private asistencias = [
    { id: 1, asignatura: 'Matemáticas', fecha: '2024-09-20', presente: true },
    { id: 2, asignatura: 'Historia', fecha: '2024-09-21', presente: false },
    { id: 3, asignatura: 'Biología', fecha: '2024-09-22', presente: true },
  ];

  constructor() {}

  getAsignaturas() {
    return this.asignaturas;
  }

  getAsistencias() {
    return this.asistencias;
  }
}
