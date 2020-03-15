import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewaydatabindingComponent } from './onewaydatabinding.component';

describe('OnewaydatabindingComponent', () => {
  let component: OnewaydatabindingComponent;
  let fixture: ComponentFixture<OnewaydatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewaydatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewaydatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
