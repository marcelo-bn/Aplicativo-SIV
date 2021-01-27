import { Component, ViewChild } from '@angular/core';
import { IonicPage, Label, NavController, NavParams, LoadingController, Slides } from 'ionic-angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { InformacaoProvider} from '../../providers/informacao/informacao';
import { Color } from 'ng2-charts';

@IonicPage()
@Component({
  selector: 'page-grafico',
  templateUrl: 'grafico.html',
})
export class GraficoPage {

  @ViewChild(Slides) slides: Slides;

  info: any;
  
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
      {backgroundColor: 'rgba(108, 232, 62, 0.7)', borderColor:  'rgba(108, 232, 62, 0.7)' },
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
      {backgroundColor: 'rgba(108, 232, 62, 0.7)', borderColor:  'rgba(108, 232, 62, 0.7)' },
      {backgroundColor: 'rgba(255, 255, 0, 0.4)', borderColor: 'rgba(255, 255, 0, 0.4)'}
    ];


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private informacaoProvider: InformacaoProvider, public loadingCtrl: LoadingController) {
      
  }

  // Animação dos slides
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  ionViewWillEnter() {
    this.informacaoProvider.getInfo().subscribe(info => {
      this.info = info
      this.info = this.info.lista_info
      
    });

    this.presentLoadingDefault() // Mensagem de carregamento

    setTimeout(() => {
      this.carregaDados()
    }, 3000);
   
  }
  
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
           (this.vaso1TempData[1].data as number []).push(25)
           if (item.umidade != "") {
            (this.vaso1UmiData[1].data as number []).push(55)
           }
        }
      }
      else {
        if (item.temperatura != "") {
          (this.vaso2TempData[1].data as number []).push(25)
          if (item.umidade != "") {
           (this.vaso2UmiData[1].data as number []).push(55)
          }
       }
      }
    }

    this.info = ""
    return true
  }
  
}
