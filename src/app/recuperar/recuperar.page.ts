import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',  // asegúrate de que esta ruta exista
=======

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
>>>>>>> c5f5246660f3070a6223a61cd2391e6a12daca4b
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

<<<<<<< HEAD
  constructor(private toastController: ToastController) { }
=======
  constructor() { }
>>>>>>> c5f5246660f3070a6223a61cd2391e6a12daca4b

  ngOnInit() {
  }

<<<<<<< HEAD
  async mensaje() {
      const mensaje = await this.toastController.create({
        message : 'Correo enviado. Favor de revisar su bandeja de entrada',
        duration: 3000,
        position: 'bottom'
      });
      await mensaje.present();
  }
=======
>>>>>>> c5f5246660f3070a6223a61cd2391e6a12daca4b
}
