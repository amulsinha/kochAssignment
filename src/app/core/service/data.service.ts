import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

  private staticData;

  constructor(
    private http: HttpClient) { }


    getStaticData() {
      return this.staticData;
    }
  
    setStaticData(data) {
      this.staticData = data;
    }

    // fetchStaticData() {
    //   const reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    //   return this.apiService.staticDataModel.get({}, {
    //     headers: reqHeader
    //   });
    // }

}


