import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticuchoComponent } from './anticucho.component';

describe('AnticuchoComponent', () => {
  let component: AnticuchoComponent;
  let fixture: ComponentFixture<AnticuchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnticuchoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnticuchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
