import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class VasoProvider {

  constructor(public http: HttpClient) {}

  getVaso(){
    return this.http.get('http://localhost:5000/vaso');    
  }

  putVaso() {}
  
  deleteVaso() {}

}
