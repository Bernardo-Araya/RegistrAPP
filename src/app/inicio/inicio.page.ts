import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private toastController: ToastController) {}
  
  ngOnInit() {
  }

  async bienvenida()
  {
      const mensaje = await this.toastController.create({
        message : 'Bienvenido usuario',
        duration: 3000,
        position: 'bottom'
      });
      await mensaje.present();
      return;
  }
  

}
