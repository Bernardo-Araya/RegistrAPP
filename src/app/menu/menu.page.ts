import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
<<<<<<< HEAD
import { NavController } from '@ionic/angular';
=======
>>>>>>> c5f5246660f3070a6223a61cd2391e6a12daca4b

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  botones = ['Aceptar'];

<<<<<<< HEAD
  constructor(private alertController: AlertController,
              private navCtrl: NavController
  ) { }
=======
  constructor(private alertController: AlertController) { }
>>>>>>> c5f5246660f3070a6223a61cd2391e6a12daca4b

  ngOnInit() {
  }

  async registrarAsis()
  {
    const alert = await this.alertController.create({
      header    : "Permiso para ocupar la camara",
      subHeader : "Para poder leer el QR que muestre el profesor, debemos acceder a su camara.",
      message   : "¿Da permiso para acceder a su camara?",
<<<<<<< HEAD
      buttons   :  [{
                      text: 'Denegar',
                      role: 'cancel'
                    }, 
                    {
                      text: 'Permitir',
                      handler:() => {
                        this.navCtrl.navigateForward('/registrar-asistencia')
                      }
                    }]
=======
      buttons   :  ['Denegar', 'Permitir']
>>>>>>> c5f5246660f3070a6223a61cd2391e6a12daca4b
    });

    await alert.present();
  }

}
