import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
<<<<<<< HEAD
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
=======
>>>>>>> c5f5246660f3070a6223a61cd2391e6a12daca4b

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

<<<<<<< HEAD
  constructor(private toastController: ToastController, 
              private alertController: AlertController,
              private router: Router) {}
  
  usuario: string = '';
  clave: string = '';


=======
  constructor(private toastController: ToastController) {}
  
>>>>>>> c5f5246660f3070a6223a61cd2391e6a12daca4b
  ngOnInit() {
  }

  async bienvenida()
  {
      const mensaje = await this.toastController.create({
<<<<<<< HEAD
        message : 'Bienvenido ' + this.usuario,
=======
        message : 'Bienvenido usuario',
>>>>>>> c5f5246660f3070a6223a61cd2391e6a12daca4b
        duration: 3000,
        position: 'bottom'
      });
      await mensaje.present();
      return;
  }
<<<<<<< HEAD

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
=======
>>>>>>> c5f5246660f3070a6223a61cd2391e6a12daca4b
  

}
