import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastelDeChocloComponent } from './pastel-de-choclo.component';

describe('PastelDeChocloComponent', () => {
  let component: PastelDeChocloComponent;
  let fixture: ComponentFixture<PastelDeChocloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastelDeChocloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastelDeChocloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
