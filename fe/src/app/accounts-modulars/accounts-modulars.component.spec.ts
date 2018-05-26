import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsModularsComponent } from './accounts-modulars.component';

describe('AccountsModularsComponent', () => {
  let component: AccountsModularsComponent;
  let fixture: ComponentFixture<AccountsModularsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsModularsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsModularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
