import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  botones = ['Aceptar'];

  constructor(private alertController: AlertController,
              private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async registrarAsis()
  {
    const alert = await this.alertController.create({
      header    : "Permiso para ocupar la camara",
      subHeader : "Para poder leer el QR que muestre el profesor, debemos acceder a su camara.",
      message   : "¿Da permiso para acceder a su camara?",
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
    });

    await alert.present();
  }

}
