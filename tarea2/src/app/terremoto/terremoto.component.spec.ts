import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerremotoComponent } from './terremoto.component';

describe('TerremotoComponent', () => {
  let component: TerremotoComponent;
  let fixture: ComponentFixture<TerremotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerremotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerremotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
