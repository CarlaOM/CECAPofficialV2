import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCreateComponent } from './alert-create.component';

describe('AlertCreateComponent', () => {
  let component: AlertCreateComponent;
  let fixture: ComponentFixture<AlertCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
