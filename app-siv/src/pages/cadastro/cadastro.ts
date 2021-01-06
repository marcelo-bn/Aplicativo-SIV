import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VegetalProvider } from '../../providers/vegetal/vegetal';
import { VasoProvider } from '../../providers/vaso/vaso';
import { AlterarVegetalPage } from '../alterar-vegetal/alterar-vegetal';
import { CriarVegetalPage} from '../criar-vegetal/criar-vegetal';
import { AlterarVasoPage } from '../alterar-vaso/alterar-vaso';


@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  vegetais: any;
  vasos: any;

  constructor(public navCtrl: NavController, private vegetalProvider: VegetalProvider, private vasoProvider: VasoProvider) {
   
  }

  // Página onde haverá método PUT Vegetal
  alterarVegetalPagina(vegetal){
    this.navCtrl.push(AlterarVegetalPage, {vegetal: vegetal})
  }

  // Página onde haverá método POST Vegetal
  criarVegetalPagina(vegetais) {
    this.navCtrl.push(CriarVegetalPage, {vegetais: vegetais})
  }

  // Página onde haverá método PUT Vaso
  alterarVasoPagina(vaso){
    this.navCtrl.push(AlterarVasoPage, {vaso: vaso})
  }

  // Método DELETE Vaso
  limpaVaso(vaso) {
    this.vasoProvider.deleteVaso(vaso.id)
  }

  // Métodos GET Vegetal e Vaso
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
