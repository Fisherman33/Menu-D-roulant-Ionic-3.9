import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider, public params: NavParams) {

  }
  ionViewDidLoad() {
    this.menu();
    
  }
  /* fonction qui récupére la data du service provider */
  menu() {
    this.dataService.getData(this.dataM).then((data) => {
      this.dataD = data
    });
  }
  clickM() {
    let clicks = document.getElementById("menu");
    if (clicks.style.display === "none") {
      clicks.style.display = "block";
    }
    else {
      clicks.style.display = "none";
    }
  }
}
