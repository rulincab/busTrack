import { Component } from '@angular/core';
import { NavController, LoadingController, IonicApp } from 'ionic-angular';
import {IngresoPage} from "../ingreso/ingreso";



@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  show: boolean = true;
  showSpinner: boolean = true;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.navCtrl.setRoot(IngresoPage)
    }, 4000);
    

  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
  
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
      duration: 4000
    });
  
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
    loading.present();
  }
  
  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading Please Wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.navCtrl.push(IngresoPage);
    }, 4000);
  
    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.setRoot(IngresoPage)
    }, 4000);
  }

}

