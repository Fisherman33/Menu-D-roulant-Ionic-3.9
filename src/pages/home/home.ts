import { Component } from '@angular/core';
import { NavController, App, NavParams, MenuController } from 'ionic-angular';

/* Service Provider */
import { DataServiceProvider } from './../../providers/data-service/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public dataM: any;
  public dataD: any;
  public dataTime: any;
  public dataT: any;
  public dataN: any;
  // public dataC: any;
  // public style: any;

  constructor(public app: App, public menu: MenuController, public navCtrl: NavController, public dataService: DataServiceProvider, public params: NavParams) {
    menu.enable(true)
  }
  ionViewDidLoad() {
    this.menus();
    this.time();
  }
  /* fonction qui récupére la data du service provider */
  menus() {
    this.dataService.getData(this.dataM).then((data) => {
      this.dataD = data
    });
  }
  time() {
    this.dataService.getDataT(this.dataTime).then((data) => {
      this.dataT = data
      this.dataN = data[0].timetable[0]
      this.dataN.forEach(Time => {
        console.log(Time.subjectName)
      });
      console.log(this.dataN)
    });
  }
  clickM(M) {
    M.open = !M.open
  }
}
