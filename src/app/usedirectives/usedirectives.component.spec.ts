import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedirectivesComponent } from './usedirectives.component';

describe('UsedirectivesComponent', () => {
  let component: UsedirectivesComponent;
  let fixture: ComponentFixture<UsedirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
