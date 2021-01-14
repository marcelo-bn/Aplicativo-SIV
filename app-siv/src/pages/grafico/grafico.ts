import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import chartJs from 'chart.js';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private informacaoProvider: InformacaoProvider) {
  }

  ionViewWillEnter() {
    this.info = ""
    this.vaso1Temperaturas = []
    this.vaso1Umidades = []
    this.vaso1Datas = []
    this.vaso2Temperaturas = []
    this.vaso2Umidades = []
    this.vaso2Datas = []

    this.informacaoProvider.getInfo().subscribe(info => {
      this.info = info
      this.info = this.info.lista_info
      console.log(this.info)
    });

    setTimeout(() => {
      this.lineChart1 = this.getLineChartVaso1();
    }, 3000);
    setTimeout(() => {
      this.lineChart2 = this.getLineChartVaso2();
    }, 3000);

  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType
    })
  }

  getLineChartVaso1() {
    
    this.verificaVaso()
    
    const data = {
      labels: this.vaso1Datas,
      datasets: [{
        label: 'temperatura',
        data: this.vaso1Temperaturas,
        borderColor: 'rgb(102, 178, 255)',   
        borderCapStyle: 'butt',
        borderJoinStyle: 'mitter',
        pointRadius: 3,
        pointHitRadius: 10,
        spanGaps: false,
      }, 
      {
        label: 'umidade',
        data: this.vaso1Umidades,
        borderColor: 'rgb(125, 197, 103)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'mitter',
        pointRadius: 3,
        pointHitRadius: 10,
        spanGaps: false,
      } ]
    }

    const options = {
      scales:{
        xAxes: [{
            display: false 
        }]
      }
    }
    
    return this.getChart(this.lineCanvas.nativeElement, 'line', data, options)
  
  }

  getLineChartVaso2() {
    
    this.verificaVaso()
    
    const data = {
      labels: this.vaso2Datas,
      datasets: [{
        label: 'temperatura',
        data: this.vaso2Temperaturas,
        borderColor: 'rgb(102, 178, 255)',   
        borderCapStyle: 'butt',
        borderJoinStyle: 'mitter',
        pointRadius: 3,
        pointHitRadius: 10,
        spanGaps: false,
      }, 
      {
        label: 'umidade',
        data: this.vaso2Umidades,
        borderColor: 'rgb(125, 197, 103)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'mitter',
        pointRadius: 3,
        pointHitRadius: 10,
        spanGaps: false,
      } ]
    }
    
    const options = {
      scales:{
        xAxes: [{
            display: false 
        }]
      }
    }

    return this.getChart(this.lineCanvas2.nativeElement, 'line', data, options)
  
  }


  verificaVaso() {
    // Seleciona apenas os dados de um vaso específico
    
    for (var item of this.info) {
      if (item.idVaso == 1) {
        this.vaso1Temperaturas.push(item.temperatura)
        this.vaso1Umidades.push(item.umidade)
        this.vaso1Datas.push(item.data)
      } else {
        this.vaso2Temperaturas.push(item.temperatura)
        this.vaso2Umidades.push(item.umidade)
        this.vaso2Datas.push(item.data)
      }
    }
    
    return true

  }


}
