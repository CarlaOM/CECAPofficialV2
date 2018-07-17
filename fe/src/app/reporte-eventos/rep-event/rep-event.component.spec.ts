import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepEventComponent } from './rep-event.component';

describe('EventComponent', () => {
  let component: RepEventComponent;
  let fixture: ComponentFixture<RepEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
