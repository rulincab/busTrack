import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Page4Page } from '../page4/page4';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { BusTrackPage} from '../bus-track/bus-track';
@Component({
  selector: 'page-ingreso',
  templateUrl: 'ingreso.html'
})
export class IngresoPage {
  items: Observable<any[]>;
  displayName;  
  
  constructor(public navCtrl: NavController ,private afAuth: AngularFireAuth, afDB: AngularFireDatabase, private fb: Facebook, private platform: Platform) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
        this.displayName = user.displayName; 
    //this.items = afDB.list('paraderos').valueChanges();
  });
}
signInWithFacebook() {
  if (this.platform.is('cordova')) {
    return this.fb.login(['email', 'public_profile']).then(res => {
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      return firebase.auth().signInWithCredential(facebookCredential);
    })
  }
  else {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log(res)
        this.navCtrl.setRoot(BusTrackPage);
      });
    }
  }
  
  signOut() {
    this.afAuth.auth.signOut();
    }
  }
  