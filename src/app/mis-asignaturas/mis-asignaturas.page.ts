import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage implements OnInit {
  asignaturas: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.asignaturas = this.apiService.getAsignaturas();
  }
}
