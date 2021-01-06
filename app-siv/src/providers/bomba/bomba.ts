import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BombaProvider {

  info : any;

  constructor(public http: HttpClient) {}


  getInfo(){
    return this.http.get('https://api-siv.herokuapp.com/vaso');    
  }

  putBomba(idVaso, tempoBomba){
    let body = {
      idVaso : String(idVaso),
      tempo :tempoBomba
    };

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    //console.log(JSON.stringify(body))
    return this.http.put('https://api-siv.herokuapp.com/bomba', JSON.stringify(body), 
                        {headers}).subscribe(
                                    val => {
                                        console.log("PUT realizado", 
                                                    val);
                                    },
                                    response => {
                                        console.log("PUT não realizado", response);
                                    }
                                );

  }


}
