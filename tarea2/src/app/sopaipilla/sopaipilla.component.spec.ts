import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopaipillaComponent } from './sopaipilla.component';

describe('SopaipillaComponent', () => {
  let component: SopaipillaComponent;
  let fixture: ComponentFixture<SopaipillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SopaipillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SopaipillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
