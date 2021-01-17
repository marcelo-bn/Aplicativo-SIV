import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { EmailPage} from '../email/email';
import { InformacaoProvider } from '../../providers/informacao/informacao';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  info: any;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, 
    private informacaoProvider: InformacaoProvider) {

  }

  ionViewWillEnter(){
    this.informacaoProvider.getStart().subscribe(info => {
      this.info = info
      //this.info = this.info.lista_info
      console.log(this.info)
    });
    
  }

   // Redireciona para a página de enviar email
   enviarEmailPagina() { this.navCtrl.push(EmailPage) }

}
