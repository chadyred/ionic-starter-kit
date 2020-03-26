import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {DevicePage} from './device.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DevicePage
      },
      {
        path: ':name',
        children: [{
          path: '',
          loadChildren: () => import('./single-device/single-device.module').then( m => m.SingleDevicePageModule)
        }]
      }
    ])
  ],
  declarations: [DevicePage]
})
export class DevicePageModule {}
