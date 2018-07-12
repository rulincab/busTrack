import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { IngresoPage } from '../pages/ingreso/ingreso';
import { BusTrackPage } from '../pages/bus-track/bus-track';
import { Page4Page } from '../pages/page4/page4';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';

export  const firebaseConfig = {
  apiKey: "AIzaSyCzkGIRENJEMTvauIEPUlcA6IR3zEhq-TM",
    authDomain: "fir-aad23.firebaseapp.com",
    databaseURL: "https://fir-aad23.firebaseio.com",
    projectId: "fir-aad23",
    storageBucket: "fir-aad23.appspot.com",
    messagingSenderId: "893753206175"
};

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    IngresoPage,
    BusTrackPage,
    Page4Page,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    IngresoPage,
    BusTrackPage,
    Page4Page,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}