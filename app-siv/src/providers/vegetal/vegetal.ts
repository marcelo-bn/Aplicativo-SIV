import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class VegetalProvider {

  constructor(public http: HttpClient) {}

  getVegetal(){
    return this.http.get('http://localhost:5000/vegetal');    
  }

  putVegetal(nome,tempIdeal,umiIdeal) {

    let body = {
      nome : nome,
      tempIdeal : String(tempIdeal),
      umidadeIdeal : String(umiIdeal)
    };

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    return this.http.put('http://localhost:5000/vegetal', JSON.stringify(body), 
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

  postVegetal(nome,tempIdeal,umiIdeal) {}

}
