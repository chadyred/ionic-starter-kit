import { Component, OnInit } from '@angular/core';
import {NavParams} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.page.html',
  styleUrls: ['./single-device.page.scss'],
})
export class SingleDevicePage implements OnInit {

  name: string;
  hello = 'World';

  constructor(public activatedRoute: ActivatedRoute) { }

  showHello(helloValue) {
    return alert(helloValue);
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
  }
}
