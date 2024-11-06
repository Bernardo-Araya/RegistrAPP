import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private toastController: ToastController, 
              private alertController: AlertController,
              private router: Router,
              private http: HttpClient) {}
  
  usuario: string = '';
  clave: string = '';

  ngOnInit() {}

  async bienvenida() {
    const mensaje = await this.toastController.create({
      message : 'Bienvenido ' + this.usuario,
      duration: 3000,
      position: 'bottom'
    });
    await mensaje.present();
  }

  async validar() {
    if (!this.usuario?.trim() || !this.clave?.trim()) {
      const alert = await this.alertController.create({
        header: "Error",
        message: "Debe ingresar los datos para acceder",
        buttons: ['Ok']
      });
      await alert.present();
    } else {
      // Verificar si es un alumno
      this.http.get<any>('http://localhost:3000/Alumno')
        .subscribe({
          next: (data) => {
            const alumno = data.find((user: any) => user.usuario === this.usuario.trim() && user.clave === this.clave.trim());
            if (alumno) {
              // Si es un alumno, redirigir al menú del alumno
              this.bienvenida();
              this.router.navigate(['/menu']);
            } else {
              // Si no es alumno, verificar si es docente
              this.http.get<any>('http://localhost:3000/Docente')
                .subscribe({
                  next: (dataDocente) => {
                    const docente = dataDocente.find((user: any) => user.usuario === this.usuario.trim() && user.clave === this.clave.trim());
                    if (docente) {
                      // Si es un docente, redirigir al menú del docente
                      this.bienvenida();
                      this.router.navigate(['/menu2']);
                    } else {
                      // Si no es ni alumno ni docente
                      this.showError("Error al ingresar los datos", "Por favor, vuelva a intentarlo nuevamente");
                    }
                  },
                  error: (err) => this.handleError(err)
                });
            }
          },
          error: (err) => this.handleError(err)
        });
    }
  }

  private async showError(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok']
    });
    await alert.present();
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Hubo un error con la petición HTTP', error);
    this.showError("Error de conexión", "No se pudo verificar los datos, intente nuevamente.");
  }
}
