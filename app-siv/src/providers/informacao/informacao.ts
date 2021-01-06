import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class InformacaoProvider {

  info : any;

  constructor(public http: HttpClient) {}


  getInfo(){
    return this.http.get('https://api-siv.herokuapp.com/informacao');    
  }

}
