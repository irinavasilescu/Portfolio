import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeonnutritionComponent } from './lifeonnutrition.component';

describe('LifeonnutritionComponent', () => {
  let component: LifeonnutritionComponent;
  let fixture: ComponentFixture<LifeonnutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeonnutritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeonnutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
