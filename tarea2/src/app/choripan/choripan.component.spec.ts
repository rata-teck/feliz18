import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoripanComponent } from './choripan.component';

describe('ChoripanComponent', () => {
  let component: ChoripanComponent;
  let fixture: ComponentFixture<ChoripanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoripanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoripanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
