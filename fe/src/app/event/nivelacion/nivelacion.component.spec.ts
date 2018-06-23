import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelacionComponent } from './nivelacion.component';

describe('NivelacionComponent', () => {
  let component: NivelacionComponent;
  let fixture: ComponentFixture<NivelacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
