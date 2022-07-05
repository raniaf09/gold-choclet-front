import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeteComponent } from './fete.component';

describe('FeteComponent', () => {
  let component: FeteComponent;
  let fixture: ComponentFixture<FeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
