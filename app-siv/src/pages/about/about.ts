import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { EmailPage} from '../email/email';
import { InformacaoProvider } from '../../providers/informacao/informacao';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  info: any;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, 
    private informacaoProvider: InformacaoProvider, public loadingCtrl: LoadingController) {

  }

  ionViewWillEnter(){
    this.informacaoProvider.getStart().subscribe(info => {
      this.info = info
    });
  }

   // Redireciona para a página de enviar email
   enviarEmailPagina() { this.navCtrl.push(EmailPage) }

}
