import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumitaComponent } from './humita.component';

describe('HumitaComponent', () => {
  let component: HumitaComponent;
  let fixture: ComponentFixture<HumitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
