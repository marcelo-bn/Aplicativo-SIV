import { Component, ViewChild } from '@angular/core';
import { IonicPage, Label, NavController, NavParams } from 'ionic-angular';
import chartJs, { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { InformacaoProvider} from '../../providers/informacao/informacao';

@IonicPage()
@Component({
  selector: 'page-grafico',
  templateUrl: 'grafico.html',
})
export class GraficoPage {

  @ViewChild('lineCanvas') lineCanvas
  @ViewChild('lineCanvas2') lineCanvas2
  
  lineChart1: any;
  lineChart2: any;
  info: any;
  vaso1Temperaturas: Array<number> = [];
  vaso1Umidades:  Array<number> = [];
  vaso1Datas: Array<string> = [];
  vaso2Temperaturas: Array<number> = [];
  vaso2Umidades:  Array<number> = [];
  vaso2Datas: Array<string> = [];

  public chartOption: ChartOptions = { scales: { xAxes: [{ display: false }] } }

  public chartDataV1: ChartDataSets[] = [{data: [], label: 'temperatura (C)'}, {data: [], label: 'umidade (%)'}];
  public chartTypeV1: ChartType = 'line';
  public chartLabelsV1: Label[];

  public chartDataV2: ChartDataSets[] = [{data: [], label: 'temperatura (C)'}, {data: [], label: 'umidade (%)'}];
  public chartTypeV2: ChartType = 'line';
  public chartLabelsV2: Label[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private informacaoProvider: InformacaoProvider) {
      
  }

  ionViewWillEnter() {
    this.chartLabelsV1 = []
    this.chartDataV1[0].data = []
    this.chartDataV1[1].data = []

    this.informacaoProvider.getInfo().subscribe(info => {
      this.info = info
      this.info = this.info.lista_info
      
    });

    setTimeout(() => {
      this.carregaDados()
      
    }, 5000);
   
    
  }
 
  carregaDados() {
    this.chartLabelsV1 = []
    this.chartDataV1[0].data = []
    this.chartDataV1[1].data = []
    this.chartLabelsV2 = []
    this.chartDataV2[0].data = []
    this.chartDataV2[1].data = []
  
    for (var item of this.info) {
      if (item.idVaso == 1) {
        if (item.temperatura != "") {
          (this.chartDataV1[0].data as number []).push(item.temperatura)
        }
        (this.chartDataV1[1].data as number []).push(item.umidade)
        this.chartLabelsV1.push(item.data)
        
      } else {
        if (item.temperatura != "") {
          (this.chartDataV2[0].data as number []).push(item.temperatura)
        }
        (this.chartDataV2[1].data as number []).push(item.umidade)
        this.chartLabelsV2.push(item.data)
      }
    }

    this.info = ""
    return true
  }
  
}
