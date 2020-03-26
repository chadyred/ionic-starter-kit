import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'settings',
                loadChildren: '../settings/settings.module#SettingsPageModule'
            },
            {
                path: '',
                loadChildren: '../device/device.module#DevicePageModule'
            }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {}
