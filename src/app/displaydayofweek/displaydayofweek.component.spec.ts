import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydayofweekComponent } from './displaydayofweek.component';

describe('DisplaydayofweekComponent', () => {
  let component: DisplaydayofweekComponent;
  let fixture: ComponentFixture<DisplaydayofweekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydayofweekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydayofweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
