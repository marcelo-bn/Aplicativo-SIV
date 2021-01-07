import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro'
import { VasoProvider } from '../../providers/vaso/vaso';
import { VegetalProvider } from '../../providers/vegetal/vegetal';


@IonicPage()
@Component({
  selector: 'page-alterar-vaso',
  templateUrl: 'alterar-vaso.html',
})
export class AlterarVasoPage {
  vegetais: any
  vaso: any;
  nomeVegetal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    private vasoProvider: VasoProvider, private vegetalProvider: VegetalProvider) {
    this.vaso = this.navParams.get('vaso')
  }

  ionViewWillEnter() {
    this.vegetalProvider.getVegetal().subscribe(info => {
      this.vegetais = info
      this.vegetais = this.vegetais.lista_vegetais
    });
    console.log(this.vaso.nomeVegetal)
  }

  
  // Método PUT Vaso
  alterarVaso(vaso,nomeVegetal) {
    if (this.verificaNomeVegetal(nomeVegetal)) {
      this.vasoProvider.putVaso(vaso.id,nomeVegetal)
      this.sucessoToast() 
    } else {
      this.erroToast()
    }
    this.nomeVegetal = ""
    this.navCtrl.push(CadastroPage)
  }


  verificaNomeVegetal(nome) {
    console.log(nome)
    // Verifica se existe esse vegetal 
    let aux = false

    for (var item of this.vegetais) {
      if (item.nome == nome.toLowerCase()) {
        aux = true
      }
    }

    return aux

  }

  sucessoToast() {
    let toast = this.toastCtrl.create({
      message: 'Vaso alterado com sucesso!',
      duration: 3000,
      cssClass: 'toast-succ'
    });
    toast.present();
  }

  erroToast() {
    let toast = this.toastCtrl.create({
      message: 'Erro ao alterar vaso!',
      duration: 3000,
      cssClass: 'toast-fail'
    });
    toast.present();
  }

}
