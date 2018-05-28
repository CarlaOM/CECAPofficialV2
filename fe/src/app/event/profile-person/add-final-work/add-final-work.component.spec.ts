import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinalWorkComponent } from './add-final-work.component';

describe('AddFinalWorkComponent', () => {
  let component: AddFinalWorkComponent;
  let fixture: ComponentFixture<AddFinalWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFinalWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFinalWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
