import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private toastController: ToastController, 
              private alertController: AlertController,
              private router: Router) {}
  
  usuario: string = '';
  clave: string = '';


  ngOnInit() {
  }

  async bienvenida()
  {
      const mensaje = await this.toastController.create({
        message : 'Bienvenido ' + this.usuario,
        duration: 3000,
        position: 'bottom'
      });
      await mensaje.present();
      return;
  }

  async validar(){

    if(!this.usuario?.trim() || !this.clave?.trim()){
      const alert = await this.alertController.create({
        header    : "Error",
        message   : "Debe ingresar los datos para acceder",
        buttons   :  ['Ok']
      });
      await alert.present();
    } else if(this.usuario.trim() != "Usuario1"){
      const alert = await this.alertController.create({
        header    : "Error",
        subHeader : "Error al ingresar los datos",
        message   : "Por favor, vuelva a intentarlo nuevamente",
        buttons   :  ['Ok']
      });
      await alert.present();
    } else if(this.clave.trim() != "MiClav3"){
      const alert = await this.alertController.create({
        header    : "Error",
        subHeader : "Error al ingresar los datos",
        message   : "Por favor, vuelva a intentarlo nuevamente",
        buttons   :  ['Ok']
      });
      await alert.present();
    } else{
      await this.bienvenida();

      this.router.navigate(['/menu']);
    }

  }
  

}
