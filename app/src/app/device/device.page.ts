import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-device',
  templateUrl: 'device.page.html',
  styleUrls: ['device.page.scss'],
})
export class DevicePage {

  constructor(public navCtrl: NavController) {}

  goToHome() {
    this.navCtrl.navigateRoot('/');
  }

  onLoadDevice(name: string) {
    this.navCtrl.navigateForward('/' + name);
  }
}
