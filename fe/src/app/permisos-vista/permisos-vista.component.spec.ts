import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosVistaComponent } from './permisos-vista.component';

describe('PermisosVistaComponent', () => {
  let component: PermisosVistaComponent;
  let fixture: ComponentFixture<PermisosVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisosVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisosVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
