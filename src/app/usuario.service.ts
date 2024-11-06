import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // Simulamos una URL de una API de usuarios, puedes reemplazarlo con la URL de tu servidor real.
  private apiUrlAlumno = 'http://localhost:3000/alumno'; // URL del backend para obtener un alumno
  private apiUrlDocente = 'http://localhost:3000/docente'; // URL del backend para obtener un docente

  constructor(private http: HttpClient) {}

  // Obtener los datos de un alumno por ID
  obtenerAlumno(id: number): Observable<any> {
    return this.http.get(`${this.apiUrlAlumno}/${id}`);
  }

  // Obtener los datos de un docente por ID
  obtenerDocente(id: number): Observable<any> {
    return this.http.get(`${this.apiUrlDocente}/${id}`);
  }

  // Cambiar la contraseña de un alumno
  cambiarContraseñaAlumno(id: number, nuevaClave: string): Observable<any> {
    return this.http.put(`${this.apiUrlAlumno}/${id}`, { clave: nuevaClave });
  }

  // Cambiar la contraseña de un docente
  cambiarContraseñaDocente(id: number, nuevaClave: string): Observable<any> {
    return this.http.put(`${this.apiUrlDocente}/${id}`, { clave: nuevaClave });
  }
}
