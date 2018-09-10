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
  public dataC: any;
  public style: any;

  constructor(public app: App, public menu: MenuController, public navCtrl: NavController, public dataService: DataServiceProvider, public params: NavParams) {
    menu.enable(true)
  }
  ionViewDidLoad() {
    this.menus();
  }
  /* fonction qui récupére la data du service provider */
  menus() {
    this.dataService.getData(this.dataM).then((data) => {
      this.dataD = data
    });
  }
  clickM(M) {
    if (M.open === true) {
      M.open = false;
    }
    else {
     M.open = true;
    }
  }
}
