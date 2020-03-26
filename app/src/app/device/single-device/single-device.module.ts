import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleDevicePageRoutingModule } from './single-device-routing.module';

import { SingleDevicePage } from './single-device.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleDevicePageRoutingModule
  ],
  declarations: [SingleDevicePage]
})
export class SingleDevicePageModule {}
