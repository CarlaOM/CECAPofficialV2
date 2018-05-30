import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalCashComponent } from './principal-cash.component';

describe('PrincipalCashComponent', () => {
  let component: PrincipalCashComponent;
  let fixture: ComponentFixture<PrincipalCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
