import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceProvider {
public dataM: any;
public dataTime: any;
  constructor(public http: Http) {

    console.log('Hello DataServiceProvider Provider');
  }
  public getData(dataM): Promise<any> {
    return new Promise((resolve) => {
      let url = "././../assets/data/listMenu.json";
      this.http.get(url).map(res => res.json()).subscribe(data => {
        console.log(data)
        resolve(data)
      },
        err => {
          console.log('erreur')
        });
    })
  }
  public getDataT(dataTime): Promise<any> {
    return new Promise((resolve) => {
      let url = "././../assets/data/listTime.json";
      this.http.get(url).map(res => res.json()).subscribe(data => {
        console.log(data)
        resolve(data)
      },
        err => {
          console.log('erreur')
        });
    })
  }
}
