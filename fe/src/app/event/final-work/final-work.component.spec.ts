import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalWorkComponent } from './final-work.component';

describe('FinalWorkComponent', () => {
  let component: FinalWorkComponent;
  let fixture: ComponentFixture<FinalWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
