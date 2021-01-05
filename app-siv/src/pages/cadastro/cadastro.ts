import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VegetalProvider } from '../../providers/vegetal/vegetal';
import { VasoProvider } from '../../providers/vaso/vaso';
import { AlterarVegetalPage } from '../alterar-vegetal/alterar-vegetal';
import { CriarVegetalPage} from '../criar-vegetal/criar-vegetal';


@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  vegetais: any;
  vasos: any;

  constructor(public navCtrl: NavController, private vegetalProvider: VegetalProvider, private vasoProvider: VasoProvider) {
   
  }

  // Método PUT Vegetal
  alterarVegetalPagina(vegetal){
    this.navCtrl.push(AlterarVegetalPage, {vegetal: vegetal})
  }

  // Método POST Vegetal
  criarVegetalPagina() {
    this.navCtrl.push(CriarVegetalPage)
  }

   // Método PUT
  // alteraVasoPagina(vaso){
    //this.navCtrl.push(AlteraVasoPage, {vaso: vaso})
  //}

  ionViewWillEnter(){
    this.vegetalProvider.getVegetal().subscribe(info => {
      this.vegetais = info
      this.vegetais = this.vegetais.lista_vegetais
    });

    this.vasoProvider.getVaso().subscribe(info => {
      this.vasos = info
      this.vasos = this.vasos.lista_vasos
    });
  }

}
