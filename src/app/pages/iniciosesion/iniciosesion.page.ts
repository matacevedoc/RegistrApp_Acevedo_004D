import { Component, OnInit } from '@angular/core';
import { AlertController,MenuController } from '@ionic/angular';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  usuario={
    nombre:'',
    email:'',
    username:'',
    password:''
  }

  Iniciosesion(){
    console.log('Inicio de sesión correcto');
    this.MostrarMensaje();
    this.usuario.nombre='',
    this.usuario.email='',
    this.usuario.username='',
    this.usuario.password='';
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Gracias!',
      message: 'Se han enviado sus datos!',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
