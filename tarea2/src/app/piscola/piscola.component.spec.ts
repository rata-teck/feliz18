import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiscolaComponent } from './piscola.component';

describe('PiscolaComponent', () => {
  let component: PiscolaComponent;
  let fixture: ComponentFixture<PiscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiscolaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
