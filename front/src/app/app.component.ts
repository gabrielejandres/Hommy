import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Página inicial',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Editar perfil',
      url: '/edit_profile',
      icon: 'create'
    },
    {
      title: 'Favoritas',
      url: '/favorites',
      icon: 'star'
    },
    {
      title: 'Sair',
      url: '/logout',
      icon: 'log-out'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
