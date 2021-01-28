import { Component, ViewChild } from '@angular/core';
import { IonicPage, Label, NavController, NavParams, LoadingController, Slides } from 'ionic-angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { InformacaoProvider} from '../../providers/informacao/informacao';
import { VasoProvider} from '../../providers/vaso/vaso';
import { VegetalProvider} from '../../providers/vegetal/vegetal';
import { Color } from 'ng2-charts';

@IonicPage()
@Component({
  selector: 'page-grafico',
  templateUrl: 'grafico.html',
})
export class GraficoPage {

  @ViewChild(Slides) slides: Slides;

  info: any;
  vasos: any;
  vegetais: any;
  public vegetaisVasos = ["",""];
  public tempIdealVasos = ["",""];
  public umidIdealVasos = ["",""];
  
  public chartOption: ChartOptions = { scales: { xAxes: [{ display: false }] } }

  public vaso1TempData: ChartDataSets[] = [{data: [], label: 'temperatura (C)'}, {data: [], label: 'ideal'}];
  public vaso1TempType: ChartType = 'line';
  public vaso1TempLabels: Label[];
  public vaso1TempColors: Color[] 
  = [
      {backgroundColor: 'rgba(123, 166, 255, 0.7)', borderColor:  'rgba(123, 166, 255, 0.7)' },
      {backgroundColor: 'rgba(255, 255, 0, 0.4)', borderColor: 'rgba(255, 255, 0, 0.4)'}
    ];
 
  public vaso1UmiData: ChartDataSets[] = [{data: [], label: 'umidade (%)'}, {data: [], label: 'ideal'}];
  public vaso1UmiType: ChartType = 'line';
  public vaso1UmiLabels: Label[];
  public vaso1UmiColors: Color[] 
  = [
      {backgroundColor: 'rgba(108, 232, 62, 0.3)', borderColor:  'rgba(108, 232, 62, 0.3)' },
      {backgroundColor: 'rgba(255, 255, 0, 0.4)', borderColor: 'rgba(255, 255, 0, 0.4)'}
    ];
  
  public vaso2TempData: ChartDataSets[] = [{data: [], label: 'temperatura (C)'}, {data: [], label: 'ideal'}];
  public vaso2TempType: ChartType = 'line';
  public vaso2TempLabels: Label[];
  public vaso2TempColors: Color[] 
  = [
      {backgroundColor: 'rgba(123, 166, 255, 0.7)', borderColor:  'rgba(123, 166, 255, 0.7)' },
      {backgroundColor: 'rgba(255, 255, 0, 0.4)', borderColor: 'rgba(255, 255, 0, 0.4)'}
    ];

  public vaso2UmiData: ChartDataSets[] = [{data: [], label: 'umidade (%)'}, {data: [], label: 'ideal'}];
  public vaso2UmiType: ChartType = 'line';
  public vaso2UmiLabels: Label[];
  public vaso2UmiColors:  Color[] 
  = [
      {backgroundColor: 'rgba(108, 232, 62, 0.3)', borderColor:  'rgba(108, 232, 62, 0.3)' },
      {backgroundColor: 'rgba(255, 255, 0, 0.4)', borderColor: 'rgba(255, 255, 0, 0.4)'}
    ];


  // Construtor
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private informacaoProvider: InformacaoProvider, private vasoProvider: VasoProvider,
    private vegetalProvider: VegetalProvider, public loadingCtrl: LoadingController) {
      
  }

  // Animação dos slides
  slideChanged() {
    this.slides.getActiveIndex();
  }

  // Carrega ao entrar na página
  ionViewWillEnter() {
    //this.tempIdealVaso1 = ""

    this.informacaoProvider.getInfo().subscribe(info => {
      this.info = info
      this.info = this.info.lista_info
    });
    this.vegetalProvider.getVegetal().subscribe(info => {
      this.vegetais = info
      this.vegetais = this.vegetais.lista_vegetais
      console.log(this.vegetais)
    });
    this.vasoProvider.getVaso().subscribe(info => {
      this.vasos = info
      this.vasos = this.vasos.lista_vasos
      console.log(this.vasos)
    });

    this.presentLoadingDefault() // Mensagem de carregamento

    setTimeout(() => {
      this.verificaTempUmiAtual() // Verifica a temperatura e umidade atual do vaso
      this.carregaDados()
    }, 5000);
   
  }
  
  // Mensagem de carregamento
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Carregando dados'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  // Verifica temperatura e umidade ideal de cada vaso
  verificaTempUmiAtual() {

    this.vegetaisVasos[0] = this.vasos[1].vegetal // Vegetal no vaso 1
    this.vegetaisVasos[1] = this.vasos[0].vegetal // Vegetal no vaso 0
    
    for (let vegetaisVasos of this.vegetaisVasos) {
      for (let vegetal of this.vegetais) {
        if (vegetal.nome == vegetaisVasos) {
          this.tempIdealVasos[0] = vegetal.tempIdeal
        }
      }
    }
    console.log(this.tempIdealVasos)

  }





  // Inseri dados nos datasets
  carregaDados() {

    this.vaso1TempLabels = []
    this.vaso1TempData[0].data = []
    this.vaso1TempData[1].data = [] // temp ideal

    this.vaso1UmiLabels = []
    this.vaso1UmiData[0].data = []
    this.vaso1UmiData[1].data = [] // umi ideal

    this.vaso2TempLabels = []
    this.vaso2TempData[0].data = []
    this.vaso2TempData[1].data = [] // temp ideal

    this.vaso2UmiLabels = []
    this.vaso2UmiData[0].data = []
    this.vaso2UmiData[1].data = [] // umi ideal

    
    try {
        // Carrega dados de temperatura e umidade
        for (let item of this.info) {
          
          if (item.idVaso == 1) {
            if (item.temperatura != "") {
              (this.vaso1TempData[0].data as number []).push(item.temperatura)
              if (item.umidade != "") {
                (this.vaso1UmiData[0].data as number []).push(item.umidade)
              }
            }
            this.vaso1TempLabels.push(item.data)
          }
          
          else {
            if (item.temperatura != "") {
              (this.vaso2TempData[0].data as number []).push(item.temperatura)
              if (item.umidade != "") {
              (this.vaso2UmiData[0].data as number []).push(item.umidade)
              }
          }
          this.vaso2TempLabels.push(item.data)
          }

        }

        // Carrega dados de temperatura e umidade IDEAIS
        for (let item of this.info) {
          if (item.idVaso == 1) {
            if (item.temperatura != "") {
              (this.vaso1TempData[1].data as number []).push(22)
              if (item.umidade != "") {
                (this.vaso1UmiData[1].data as number []).push(55)
              }
            }
          }
          else {
            if (item.temperatura != "") {
              (this.vaso2TempData[1].data as number []).push(32)
              if (item.umidade != "") {
              (this.vaso2UmiData[1].data as number []).push(73)
              }
          }
          }
        }
    } catch (error) {
      console.log('erro')
    } finally {
      this.info = ""
    }
    
    return true
  }
  
}
