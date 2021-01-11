import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, NavParams } from 'ionic-angular';
import { VegetalProvider } from '../../providers/vegetal/vegetal';
import { CadastroPage} from '../cadastro/cadastro';

@IonicPage()
@Component({
  selector: 'page-alterar-vegetal',
  templateUrl: 'alterar-vegetal.html',
})
export class AlterarVegetalPage {

  vegetal : any;
  novaTempIdeal : any;
  novaUmiIdeal : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private vegetalProvider: VegetalProvider,
    public toastCtrl: ToastController) {
    this.vegetal = navParams.get('vegetal');
  }

  ionViewDidLoad() {}

  alteraVegetal(vegetal,novaTempIdeal,novaUmiIdeal) {

    if (novaTempIdeal == undefined && novaUmiIdeal == undefined) {
      this.erroToast()
      //console.log(vegetal.nome,vegetal.tempIdeal,vegetal.umidadeIdeal)
    }
    else if (novaTempIdeal != undefined && novaUmiIdeal != undefined) {
      this.vegetalProvider.putVegetal(vegetal.nome,novaTempIdeal,novaUmiIdeal)
      this.sucessoToast()
      //console.log(vegetal.nome,novaTempIdeal,novaUmiIdeal)
    }
    else if (novaTempIdeal == undefined) {
      this.vegetalProvider.putVegetal(vegetal.nome,vegetal.tempIdeal,novaUmiIdeal)
      this.sucessoToast()
      //console.log(vegetal.nome,vegetal.tempIdeal,novaUmiIdeal)
    }
    else if (novaUmiIdeal == undefined ) {
      this.vegetalProvider.putVegetal(vegetal.nome,novaTempIdeal,vegetal.umidadeIdeal)
      this.sucessoToast()
      //console.log(vegetal.nome,novaTempIdeal,vegetal.umidadeIdeal)
    }

    this.novaTempIdeal = ""
    this.novaUmiIdeal = ""
    setTimeout(() => { console.log("World!"); }, 3000);
    this.navCtrl.pop() // Volta para a página de cadastro

  }

  sucessoToast() {
    let toast = this.toastCtrl.create({
      message: 'Vegetal alterado com sucesso!',
      duration: 3000,
      cssClass: 'toast-succ'
    });
    toast.present();
  }

  erroToast() {
    let toast = this.toastCtrl.create({
      message: 'Nada foi alterado!',
      duration: 3000,
      cssClass: 'toast-fail'
    });
    toast.present();
  }

}
