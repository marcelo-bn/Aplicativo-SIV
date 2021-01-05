import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, private bombaProvider: BombaProvider) {
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
      this.bombaProvider.putBomba(idVaso, this.tempoBomba1)
      this.tempoBomba1 = ""
    } else {
      this.bombaProvider.putBomba(idVaso, this.tempoBomba2)
      this.tempoBomba2 = ""
    }
  }

}
