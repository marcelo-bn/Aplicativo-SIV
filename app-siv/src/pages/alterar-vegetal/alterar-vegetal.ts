import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VegetalProvider } from '../../providers/vegetal/vegetal';

@IonicPage()
@Component({
  selector: 'page-alterar-vegetal',
  templateUrl: 'alterar-vegetal.html',
})
export class AlterarVegetalPage {

  vegetal : any;
  novaTempIdeal : any;
  novaUmiIdeal : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private vegetalProvider: VegetalProvider) {
    this.vegetal = navParams.get('vegetal');
  }

  ionViewDidLoad() {}

  alteraVegetal(vegetal,novaTempIdeal,novaUmiIdeal) {

    if (novaTempIdeal == undefined && novaUmiIdeal == undefined) {
      this.vegetalProvider.putVegetal(vegetal.nome,vegetal.tempIdeal,vegetal.umidadeIdeal)
      //console.log(vegetal.nome,vegetal.tempIdeal,vegetal.umidadeIdeal)
    }
    else if (novaTempIdeal != undefined && novaUmiIdeal != undefined) {
      this.vegetalProvider.putVegetal(vegetal.nome,novaTempIdeal,novaUmiIdeal)
      //console.log(vegetal.nome,novaTempIdeal,novaUmiIdeal)
    }
    else if (novaTempIdeal == undefined) {
      this.vegetalProvider.putVegetal(vegetal.nome,vegetal.tempIdeal,novaUmiIdeal)
      //console.log(vegetal.nome,vegetal.tempIdeal,novaUmiIdeal)
    }
    else if (novaUmiIdeal == undefined ) {
      this.vegetalProvider.putVegetal(vegetal.nome,novaTempIdeal,vegetal.umidadeIdeal)
      //console.log(vegetal.nome,novaTempIdeal,vegetal.umidadeIdeal)
    }

    this.novaTempIdeal = ""
    this.novaUmiIdeal = ""

  }


}
