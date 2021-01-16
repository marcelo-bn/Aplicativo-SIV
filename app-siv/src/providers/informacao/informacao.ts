import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class InformacaoProvider {

  info : any;
  URI = 'https://projeto-siv.herokuapp.com/';
  constructor(public http: HttpClient) {}


  getStart(){
    return this.http.get('https://projeto-siv.herokuapp.com/');    
  }

  getInfo(){
    return this.http.get('https://projeto-siv.herokuapp.com/informacao');    
  }


}
