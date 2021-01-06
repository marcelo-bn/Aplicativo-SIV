import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class VasoProvider {

  constructor(public http: HttpClient) {}

  getVaso(){
    return this.http.get('https://api-siv.herokuapp.com/vaso');    
  }

  putVaso() {}
  
  deleteVaso(vaso) {
    let data = {
      idVaso : String(vaso)
    };

    let data_JSON = JSON.stringify(data)

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data_JSON
     };

  
    return this.http.delete("https://api-siv.herokuapp.com/vaso", httpOptions)
                            .subscribe(
                                (val) => {
                                    console.log("DELETE call successful value returned in body", 
                                                val);
                                },
                                response => {
                                    console.log("DELETE call in error", response);
                                },
                                () => {
                                    console.log("The DELETE observable is now completed.");
                                });

  }

}
