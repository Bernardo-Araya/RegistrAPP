import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',  // asegúrate de que esta ruta exista
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async mensaje() {
      const mensaje = await this.toastController.create({
        message : 'Correo enviado. Favor de revisar su bandeja de entrada',
        duration: 3000,
        position: 'bottom'
      });
      await mensaje.present();
  }
}
