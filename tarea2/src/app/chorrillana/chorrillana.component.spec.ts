import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorrillanaComponent } from './chorrillana.component';

describe('ChorrillanaComponent', () => {
  let component: ChorrillanaComponent;
  let fixture: ComponentFixture<ChorrillanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChorrillanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChorrillanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
