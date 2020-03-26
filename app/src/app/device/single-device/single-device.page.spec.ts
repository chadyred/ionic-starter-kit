import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleDevicePage } from './single-device.page';

describe('SingleDevicePage', () => {
  let component: SingleDevicePage;
  let fixture: ComponentFixture<SingleDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDevicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
