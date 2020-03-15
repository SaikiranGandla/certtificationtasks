import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaydataBindingComponent } from './twowaydata-binding.component';

describe('TwowaydataBindingComponent', () => {
  let component: TwowaydataBindingComponent;
  let fixture: ComponentFixture<TwowaydataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaydataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaydataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
