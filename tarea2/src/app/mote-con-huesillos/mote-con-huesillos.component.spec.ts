import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoteConHuesillosComponent } from './mote-con-huesillos.component';

describe('MoteConHuesillosComponent', () => {
  let component: MoteConHuesillosComponent;
  let fixture: ComponentFixture<MoteConHuesillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoteConHuesillosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoteConHuesillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
