import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { EmailPage} from '../email/email';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

   // Redireciona para a página de enviar email
   enviarEmailPagina() { this.navCtrl.push(EmailPage) }

}
