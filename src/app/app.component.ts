import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataServiceProvider } from '../providers/data-service/data-service';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, menu: MenuController, statusBar: StatusBar, splashScreen: SplashScreen, public dataService: DataServiceProvider) {
    platform.ready().then(() => {
      menu.enable(true)

      statusBar.styleDefault();
      splashScreen.hide();  
  });
}
}

