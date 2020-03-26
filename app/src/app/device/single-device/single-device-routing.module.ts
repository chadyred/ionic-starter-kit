import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleDevicePage } from './single-device.page';

const routes: Routes = [
  {
    path: '',
    component: SingleDevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleDevicePageRoutingModule {}
