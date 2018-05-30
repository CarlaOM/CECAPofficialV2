import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToPrincipalComponent } from './send-to-principal.component';

describe('SendToPrincipalComponent', () => {
  let component: SendToPrincipalComponent;
  let fixture: ComponentFixture<SendToPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendToPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendToPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
