import { Component } from '@angular/core';
import {DevicePage} from '../device/device.page';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToDevices() {
    this.navCtrl.navigateForward('/device');
  }
}
