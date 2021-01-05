import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VegetalProvider} from '../../providers/vegetal/vegetal';

/**
 * Generated class for the CriarVegetalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-vegetal',
  templateUrl: 'criar-vegetal.html',
})
export class CriarVegetalPage {
  nome : any;
  tempIdeal : any;
  umiIdeal : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private vegetalProvider: VegetalProvider) {
  }

  ionViewDidLoad() {}

  criaVegetal(nome,tempIdeal,umiIdeal) {
    console.log(nome, tempIdeal, umiIdeal)
    this.nome = ""
    this.tempIdeal = ""
    this.umiIdeal = ""
  }

}
