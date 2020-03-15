import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogdateComponent } from './logdate.component';

describe('LogdateComponent', () => {
  let component: LogdateComponent;
  let fixture: ComponentFixture<LogdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
