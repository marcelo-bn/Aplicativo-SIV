import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import {BombaProvider} from '../../providers/bomba/bomba'

@IonicPage()
@Component({
  selector: 'page-bomba',
  templateUrl: 'bomba.html',
})
export class BombaPage {

  info: any;
  tempoBomba1: any;
  tempoBomba2: any;
  vaso1: any;
  vaso2: any;

  constructor(public navCtrl: NavController, private bombaProvider: BombaProvider, public toastCtrl: ToastController) {
  }

  ionViewWillEnter(){
    this.bombaProvider.getInfo().subscribe(info => {
      this.info = info
      this.info = this.info.lista_vasos
      this.vaso1 = this.info[0]
      this.vaso2 = this.info[1]
    });

  }
  
  acionaBomba(idVaso){
    
    if (idVaso == 1) {
      if (this.tempoBomba1 != undefined && this.tempoBomba1 != "") {
          this.bombaProvider.putBomba(idVaso, this.tempoBomba1)
          this.tempoBomba1 = ""
          this.sucessoToast()
      }
      else {
        this.erroToast()
      }
    } else {
      if (this.tempoBomba2 != undefined && this.tempoBomba2 != "") {
        this.bombaProvider.putBomba(idVaso, this.tempoBomba2)
        this.tempoBomba2 = ""
        this.sucessoToast()
      }
      else {
        this.erroToast()
      }
    }

    this.tempoBomba1 = ""
    this.tempoBomba2 = ""

  }

  sucessoToast() {
    let toast = this.toastCtrl.create({
      message: 'A bomba será acionada!',
      duration: 3000,
      cssClass: 'toast-succ'
    });
    toast.present();
  }

  erroToast() {
    let toast = this.toastCtrl.create({
      message: 'Erro ao acionar bomba!',
      duration: 3000,
      cssClass: 'toast-fail'
    });
    toast.present();
  }



}
