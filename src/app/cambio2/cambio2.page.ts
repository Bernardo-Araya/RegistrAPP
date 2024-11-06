import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../usuario.service';  // Asegúrate de que el servicio esté importado

@Component({
  selector: 'app-cambio2',
  templateUrl: './cambio2.page.html',
  styleUrls: ['./cambio2.page.scss']
})
export class Cambio2Page {
  // Propiedades vinculadas a los campos de entrada en el HTML
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  usuario: any;  // Variable para almacenar los datos del usuario
  usuarioId: number = 1;  // ID del usuario (puedes cambiarlo según cómo lo manejes)
  esDocente: boolean = false; // Define si el usuario es un docente (puedes configurarlo dinámicamente)

  constructor(
    private alertController: AlertController,
    private usuarioService: UsuarioService  // Inyecta el servicio
  ) {
    // Cargar los datos del usuario (alumno o docente)
    this.cargarUsuario();
  }

  // Cargar los datos del usuario dependiendo de si es alumno o docente
  cargarUsuario() {
    if (this.esDocente) {
      this.usuarioService.obtenerDocente(this.usuarioId).subscribe(
        (data) => {
          this.usuario = data;
        },
        (error) => {
          console.error('Error al cargar el docente', error);
          this.presentAlert('Error', 'No se pudo cargar los datos del docente.');
        }
      );
    } else {
      this.usuarioService.obtenerAlumno(this.usuarioId).subscribe(
        (data) => {
          this.usuario = data;
        },
        (error) => {
          console.error('Error al cargar el alumno', error);
          this.presentAlert('Error', 'No se pudo cargar los datos del alumno.');
        }
      );
    }
  }

  async cambiarContraseña() {
    // Verificar si la contraseña antigua es correcta
    if (this.oldPassword !== this.usuario.clave) {
      this.presentAlert('Error', 'La contraseña antigua no es correcta.');
      return;
    }

    // Verificar si las contraseñas nuevas coinciden
    if (this.newPassword !== this.confirmPassword) {
      this.presentAlert('Error', 'Las contraseñas nuevas no coinciden.');
      return;
    }

    // Si todo es correcto, proceder con la actualización de la contraseña
    if (this.esDocente) {
      this.usuarioService.cambiarContraseñaDocente(this.usuario.id, this.newPassword).subscribe(
        () => {
          this.presentAlert('Éxito', 'Contraseña cambiada con éxito.');
        },
        (error) => {
          console.error('Error al cambiar la contraseña del docente', error);
          this.presentAlert('Error', 'Hubo un error al cambiar la contraseña.');
        }
      );
    } else {
      this.usuarioService.cambiarContraseñaAlumno(this.usuario.id, this.newPassword).subscribe(
        () => {
          this.presentAlert('Éxito', 'Contraseña cambiada con éxito.');
        },
        (error) => {
          console.error('Error al cambiar la contraseña del alumno', error);
          this.presentAlert('Error', 'Hubo un error al cambiar la contraseña.');
        }
      );
    }

    // Limpiar los campos
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

  // Función para mostrar alertas
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
