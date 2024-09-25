import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-mis-asistencias',
  templateUrl: './mis-asistencias.page.html',
  styleUrls: ['./mis-asistencias.page.scss'],
})
export class MisAsistenciasPage implements OnInit {
  asistencias: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.asistencias = this.apiService.getAsistencias();
  }
}
