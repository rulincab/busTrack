import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page4Page } from '../page4/page4';
///import { Page4Page } from '../page4/page4';
///import { Page4Page } from '../page4/page4';
///import { Page4Page } from '../page4/page4';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = Page4Page;
  tab2Root: any = Page4Page;
  tab3Root: any = Page4Page;
  constructor(public navCtrl: NavController) {
  }
  goToPage4(params){
    if (!params) params = {};
    this.navCtrl.push(Page4Page);
  }
}
