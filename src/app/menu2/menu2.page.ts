import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.page.html',
  styleUrls: ['./menu2.page.scss'],
})
export class Menu2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  // Puedes agregar métodos para manejar las interacciones con las opciones del menú si es necesario
}
